import {defineField, defineType} from 'sanity'

export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'string',
    }),
    defineField({
        name: 'summary',
        title: 'Summary',
        type: 'string',
    }),
    
  ],
})