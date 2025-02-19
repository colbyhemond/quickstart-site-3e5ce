import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'string',
    }),
    defineField({
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
    }),
    defineField({
        name: 'buttonLink',
        title: 'Button Link',
        type: 'string',
    }),
    
  ],
})