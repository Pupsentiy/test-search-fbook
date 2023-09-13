import { type RootState } from '../index.ts'

export const getBooksData = (state: RootState) => state?.booksSlice?.data?.items
export const getTotalBooks = (state: RootState) => state?.booksSlice?.data?.totalItems
export const getBooksError = (state: RootState) => state?.booksSlice?.error
export const getBooksIsLoading = (state: RootState) => state?.booksSlice?.isLoading
