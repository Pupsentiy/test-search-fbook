import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type filterState } from '../filter/types.ts'
import { type Books } from './types.ts'
// const apiKey = import.meta.env.VITE_API_KEY

export const fetchBooksData = createAsyncThunk<
Books,
filterState
>(
  'books/fetchBooksData',
  async (params, thunkApi) => {
    const { searchValue, sort } = params
    try {
      const response = await axios.get<Books>(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=${sort}`)

      if (!response.data) {
        throw new Error()
      }
      console.log(response.data)
      return response.data
    } catch (e) {
      console.error(e)
      return thunkApi.rejectWithValue('error')
    }
  }
)
