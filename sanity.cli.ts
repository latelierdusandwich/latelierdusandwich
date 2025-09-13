import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lmopgw2x',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  
  /**
   * Uncomment and add your studio hostname after first deploy
   * studioHost: 'latelierdusandwich-main'
   */
})