import { lazy } from 'react'

export const BookDetailsPageAsync = lazy(
  async () => await import('./BookDetailsPage.tsx')
)
