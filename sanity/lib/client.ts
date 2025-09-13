import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'lmopgw2x',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if you need fresh data
})