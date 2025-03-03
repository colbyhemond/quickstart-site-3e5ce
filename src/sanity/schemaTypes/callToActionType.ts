import {defineField, defineType} from 'sanity'

export const callToActionType = defineType({
  name: 'calltoaction',
  title: 'Call To Action',
  type: 'object',
  fields: [
    defineField({
      name: 'ctatext',
      title: 'Text',
      type: 'string'
    }),
    defineField({
      name: 'buttonlink',
      title: 'Button Link',
      type: 'string',
    }),
    defineField({
        name: 'buttontext',
        title: 'Button Text',
        type: 'string',
    }),
  ],
})