import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'showcasePost',
      title: 'Showcase Post',
      type: 'reference',
      to: [{type: 'post'}],
    }),
    defineField({
        name: 'calltoaction',
        title: 'Call To Action',
        type: 'calltoaction',
    }),
  ],
})