import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchBooksData } from './asyncActions.ts'
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
    // setBooks (state, action: PayloadAction<any[]>) {
    //   state.items = action.payload
    // }
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
      .addCase(fetchBooksData.rejected, (state) => {
        state.isLoading = false
        // state.error = action.payload
      })
  }
})

// export const {} = booksSlice.actions
export default booksSlice.reducer
