import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type filterState } from './types.ts'

const initialState: filterState = {
  searchValue: '',
  categoryId: 1,
  // currentPage: 1,
  sort: ''
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId (state, action: PayloadAction<number>) {
      state.categoryId = action.payload
    },
    setSearchValue (state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort (state, action: PayloadAction<any>) {
      state.sort = action.payload
    }
  }
})
export const { setSearchValue } = filterSlice.actions
export default filterSlice.reducer
