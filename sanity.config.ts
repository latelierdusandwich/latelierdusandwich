import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'L\'Atelier du Sandwich',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Contenu du Site')
          .items([
            S.listItem()
              .title('Paramètres du Site')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('Section Accueil')
              .id('hero')
              .child(
                S.document()
                  .schemaType('hero')
                  .documentId('hero')
              ),
            S.listItem()
              .title('Section À Propos')
              .id('about')
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
              ),
            S.listItem()
              .title('Avis Clients')
              .id('reviews')
              .child(
                S.document()
                  .schemaType('reviews')
                  .documentId('reviews')
              ),
            S.listItem()
              .title('Contact')
              .id('contact')
              .child(
                S.document()
                  .schemaType('contact')
                  .documentId('contact')
              ),
            S.listItem()
              .title('Horaires')
              .id('hours')
              .child(
                S.document()
                  .schemaType('hours')
                  .documentId('hours')
              ),
            S.listItem()
              .title('Pied de Page')
              .id('footer')
              .child(
                S.document()
                  .schemaType('footer')
                  .documentId('footer')
              ),
          ])
    }),
    visionTool()
  ],

  schema,
})