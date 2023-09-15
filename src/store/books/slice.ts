import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchBooksData, fetchBooksLoadMoreData } from './asyncActions.ts'
import { type Books, type BooksSchema } from './types.ts'

const initialState: BooksSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchBooksData.fulfilled, (
        state,
        action: PayloadAction<Books>
      ) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchBooksData.rejected, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        state.error = action.payload
      })
      .addCase(fetchBooksLoadMoreData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchBooksLoadMoreData.fulfilled, (
        state,
        action: PayloadAction<Books>
      ) => {
        if (state.data) {
          state.isLoading = false
          state.data.items = [...state.data.items, ...action.payload.items]
        }
      })
      .addCase(fetchBooksLoadMoreData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

// export const {  } = booksSlice.actions
export default booksSlice.reducer
