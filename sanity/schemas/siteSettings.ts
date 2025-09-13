import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du Restaurant',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description SEO',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    }),
    defineField({
      name: 'menuPdf',
      title: 'Lien du Menu PDF',
      type: 'url',
      validation: Rule => Rule.required()
    })
  ]
})