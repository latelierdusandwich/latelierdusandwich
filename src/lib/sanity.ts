import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'

// Queries pour récupérer les données
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]`,
  hero: `*[_type == "hero"][0]`,
  about: `*[_type == "about"][0]`,
  contact: `*[_type == "contact"][0]`,
  hours: `*[_type == "hours"][0]`,
  reviews: `*[_type == "reviews"][0]`,
  footer: `*[_type == "footer"][0]`
}

// Fonctions pour récupérer les données
export async function getSiteSettings() {
  return await client.fetch(queries.siteSettings)
}

export async function getHeroData() {
  return await client.fetch(queries.hero)
}

export async function getAboutData() {
  return await client.fetch(queries.about)
}

export async function getContactData() {
  return await client.fetch(queries.contact)
}

export async function getHoursData() {
  return await client.fetch(queries.hours)
}

export async function getReviewsData() {
  return await client.fetch(queries.reviews)
}

export async function getFooterData() {
  return await client.fetch(queries.footer)
}

export { urlForImage }