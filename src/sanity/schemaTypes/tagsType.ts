import {defineField, defineType} from 'sanity'

export const tagsType = defineType({
  name: 'tags',
  title: 'Tags',
  type: 'array',
  of: [
    {
        type: 'string'
    }
  ],
  options: {
    layout: 'tags'
  }
})