export enum Categories {
  'ALL' = 'All',
  'ART' = 'Art',
  'BIOGRAPHY' = 'Biography',
  'COMPUTERS' = 'Computers',
  'HISTORY' = 'History',
  'MEDICAL' = 'Medical',
  'POETRY' = 'Poetry'
}

export enum Sort {
  'RELEVANCE' = 'relevance',
  'NEWEST' = 'newest',
}

export const CategoriesOptions: Record<Categories, string> = {
  [Categories.ALL]: '',
  [Categories.ART]: 'Art',
  [Categories.BIOGRAPHY]: 'Biography',
  [Categories.COMPUTERS]: 'Computers',
  [Categories.HISTORY]: 'History',
  [Categories.MEDICAL]: 'Medical',
  [Categories.POETRY]: 'Poetry'
}

export const SortOptions: Record<Sort, string> = {
  [Sort.RELEVANCE]: 'Relevance',
  [Sort.NEWEST]: 'Newest'
}

export const BASE_URL = 'https://www.googleapis.com/books/v1/volumes'
export const MAX_RES = 30
