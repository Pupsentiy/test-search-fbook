import { type RootState } from '../index.ts'

export const getSearchValue = (state: RootState) => state?.filterSlice?.searchValue
export const getCategory = (state: RootState) => state?.filterSlice?.category
export const getSort = (state: RootState) => state?.filterSlice?.sort
export const getCurrentSearch = (state: RootState) => state?.filterSlice?.currentSearch
export const getCurrentPage = (state: RootState) => state?.filterSlice?.currentPage
