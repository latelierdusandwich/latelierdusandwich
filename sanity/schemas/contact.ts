import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Informations de Contact',
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
      name: 'address',
      title: 'Adresse',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Rue',
          type: 'string'
        },
        {
          name: 'city',
          title: 'Ville',
          type: 'string'
        },
        {
          name: 'postalCode',
          title: 'Code Postal',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Lien Google Maps',
      type: 'url'
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Code Embed Google Maps',
      type: 'text'
    }),
    defineField({
      name: 'amenities',
      title: 'Services & Équipements',
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
            type: 'string'
          },
          {
            name: 'icon',
            title: 'Icône',
            type: 'string',
            options: {
              list: [
                { title: 'Wi-Fi', value: 'wifi' },
                { title: 'Terrasse', value: 'picnicTable' },
                { title: 'Toilettes', value: 'toilet' }
              ]
            }
          }
        ]
      }]
    })
  ]
})