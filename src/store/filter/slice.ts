import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type filterState } from './types.ts'

const initialState: filterState = {
  searchValue: '',
  category: '',
  sort: 'relevance'
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory (state, action: PayloadAction<string>) {
      state.category = action.payload
    },
    setSearchValue (state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setSort (state, action: PayloadAction<string>) {
      state.sort = action.payload
    }
  }
})
export const { setSearchValue, setSort, setCategory } = filterSlice.actions
export default filterSlice.reducer
