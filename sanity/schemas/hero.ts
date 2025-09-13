import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Section Accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre Principal',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Image de Fond',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du Bouton',
      type: 'string'
    }),
    defineField({
      name: 'locationText',
      title: 'Texte de Localisation',
      type: 'string'
    }),
    defineField({
      name: 'amenities',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})