import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type Books } from './types.ts'
import { BASE_URL, MAX_RES } from 'utils/helpers/consts.ts'
import { type filterState } from 'store/filter/types.ts'
const apiKey = import.meta.env.VITE_API_KEY

export const fetchBooksData = createAsyncThunk<
Books,
filterState
>(
  'books/fetchBooksData',
  async (params, thunkApi) => {
    const { searchValue, sort, category } = params

    try {
      const response = await axios.get<Books>(
`${BASE_URL}?q=
${searchValue}+subject:${category}&orderBy=${sort}&maxResults=${MAX_RES}&key=${apiKey}`)

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
