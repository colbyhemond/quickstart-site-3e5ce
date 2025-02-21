'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.jsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {BoltIcon} from '@sanity/icons'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

import {codeInput} from '@sanity/code-input'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["settings"])

export default defineConfig({
  // name: 'Sanity Studio',
  // title: 'quickstart',
  basePath: '/admin',
  projectId,
  dataset,
  title: 'Content Editor',
  subtitle: 'Edit the content of your site',
  icon: BoltIcon,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    codeInput()
  ],

  schema: {
    types: schema,
    templates: (templates) => templates.filter(({ schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) => singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input,
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { type, schemaType } = creationContext;
      if (type === 'global') {
        return prev.filter((template) => template.templateId !== 'aboutPage' && template.templateId !== 'homePage');
      }
      return prev;
    },
  }
})
