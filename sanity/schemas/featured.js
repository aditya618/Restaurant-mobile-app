import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'featured',
    title: 'Featured Menu Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Featured Category Name',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'restuarants',
            title: 'Restuarants',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{
                    type: 'restuarant'
                }]
            }]
        }),
    ]
})