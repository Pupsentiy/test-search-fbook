import { type RootState } from '../index.ts'

export const getSearchValue = (state: RootState) => state?.filterSlice?.searchValue
export const getCategoryId = (state: RootState) => state?.filterSlice?.categoryId
export const getSort = (state: RootState) => state?.filterSlice?.sort
