import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './books/slice'
import filterSlice from './filter/slice'

export const store = configureStore({
  reducer: {
    booksSlice,
    filterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
