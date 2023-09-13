export enum Categories {
  'ALL' = 'all',
  'ART' = 'art',
  'BIOGRAPHY' = 'biography',
  'COMPUTERS' = 'computers',
  'HISTORY' = 'history',
  'MEDICAL' = 'medical',
  'POETRY' = 'poetry'
}

export enum Sort {
  'RELEVANCE' = 'relevance',
  'NEWEST' = 'newest',
}

export const CategoriesOptions: Record<Categories, string> = {
  [Categories.ALL]: 'All',
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
