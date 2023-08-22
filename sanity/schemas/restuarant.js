import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restuarant',
  title: 'Restuarant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restuarant Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    }),
    defineField({
      name: 'image',
      title: 'Image of Restuarant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restuarant',
      type: 'number',
    }),
    defineField({
      name: 'lon',
      title: 'Longitude of the Restuarant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restuarant Address',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 Stars)',
      type: 'number',
      validation: Rule => Rule.min(1).max(5).error("Please enter a value between 1 and 5")
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type: 'dish'}]
      }]
    }),
  ],
})
