import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hours',
  title: 'Horaires',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'schedule',
      title: 'Planning',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'day',
            title: 'Jour',
            type: 'string'
          },
          {
            name: 'hours',
            title: 'Horaires',
            type: 'string'
          },
          {
            name: 'isOpen',
            title: 'Ouvert',
            type: 'boolean'
          }
        ]
      }]
    }),
    defineField({
      name: 'specialNotice',
      title: 'Notice Spéciale',
      type: 'text'
    }),
    defineField({
      name: 'serviceHours',
      title: 'Heures de Service',
      type: 'string'
    }),
    defineField({
      name: 'lastOrderNotice',
      title: 'Notice Dernière Commande',
      type: 'string'
    })
  ]
})