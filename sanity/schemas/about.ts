import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Section À Propos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'qualityTitle',
      title: 'Titre Engagement Qualité',
      type: 'string'
    }),
    defineField({
      name: 'qualityDescription',
      title: 'Description Engagement Qualité',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'qualityPoints',
      title: 'Points Qualité',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'carouselImages',
      title: 'Images du Carousel',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Texte alternatif'
          }
        ]
      }]
    }),
    defineField({
      name: 'highlights',
      title: 'Points Forts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Titre',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            name: 'icon',
            title: 'Icône',
            type: 'string',
            options: {
              list: [
                { title: 'Award', value: 'award' },
                { title: 'Map Pin', value: 'mapPin' },
                { title: 'Users', value: 'users' },
                { title: 'Clock', value: 'clock' }
              ]
            }
          }
        ]
      }]
    })
  ]
})