import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Avis Clients',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la Section',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'reviewsList',
      title: 'Liste des Avis',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Nom du Client',
            type: 'string'
          },
          {
            name: 'rating',
            title: 'Note (sur 5)',
            type: 'number',
            validation: Rule => Rule.min(1).max(5)
          },
          {
            name: 'comment',
            title: 'Commentaire',
            type: 'text'
          }
        ]
      }]
    })
  ]
})