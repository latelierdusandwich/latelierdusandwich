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
    }),
    // New fields for MenuModal
    defineField({
      name: 'menuTitle',
      title: 'Titre du Menu Modal',
      type: 'string',
      initialValue: 'Notre Menu'
    }),
    defineField({
      name: 'contactPhone',
      title: 'Numéro de Téléphone',
      type: 'string',
      initialValue: '06 66 10 31 11'
    }),
    defineField({
      name: 'menuFooterText',
      title: 'Texte du Footer du Menu',
      type: 'string',
      initialValue: 'Pour toute question sur nos produits, n\'hésitez pas à nous contacter au'
    })
  ]
})