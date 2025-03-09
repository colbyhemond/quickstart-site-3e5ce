import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'person'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          description: 'Describe the image in a few words. Improves SEO, AIO, and A11y.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'tags',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
        {type: 'code'},
      ],
    }),
    defineField({
      name: 'calltoaction',
      title: 'Call To Action',
      type: 'calltoaction',
    }),
  ],
})