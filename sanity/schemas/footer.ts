import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Pied de Page',
  type: 'document',
  fields: [
    defineField({
      name: 'brandDescription',
      title: 'Description de la Marque',
      type: 'text'
    }),
    defineField({
      name: 'tagline',
      title: 'Slogan',
      type: 'string'
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string'
    }),
    defineField({
      name: 'createdByUrl',
      title: 'Lien "Created by"',
      type: 'url'
    }),
    defineField({
      name: 'createdByText',
      title: 'Texte "Created by"',
      type: 'string'
    })
  ]
})