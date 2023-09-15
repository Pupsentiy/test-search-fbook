import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type Books, type fetchBooksDataType, type fetchLoadMoreDataType } from './types.ts'
import { BASE_URL, MAX_RES } from 'utils/helpers/consts.ts'
const apiKey = import.meta.env.VITE_API_KEY

export const fetchBooksData = createAsyncThunk<
Books,
fetchBooksDataType
>(
  'books/fetchBooksData',
  async (params, thunkApi) => {
    const { searchValue, sort, category } = params
    try {
      const response = await axios.get<Books>(
`${BASE_URL}?q=
${searchValue}+subject:
${category}&orderBy=
${sort}&maxResults=
${MAX_RES}&key=${apiKey}`)

      if (!response.data) {
        throw new Error('Something went wrong')
      }
      console.log(response.data)
      return response.data
    } catch (error: unknown) {
      if (
        axios.isAxiosError<{ error?: { message: string } }>(error)) {
        const openAiError = error.response?.data?.error?.message
        if (openAiError) {
          return thunkApi.rejectWithValue(openAiError)
        } else {
          return thunkApi.rejectWithValue(`${error.message}`)
        }
      } else {
        return thunkApi.rejectWithValue('Something went wrong')
      }
    }
  }
)

export const
  fetchBooksLoadMoreData =
    createAsyncThunk<
    Books,
    fetchLoadMoreDataType
    >(
      'books/fetchBooksLoadMoreData',
      async (params, thunkApi) => {
        const { searchValue, currentPage } = params
        const startIndex = MAX_RES * currentPage
        try {
          const response = await axios.get<Books>(
                `${BASE_URL}?q=
${searchValue}&maxResults=
${MAX_RES}&startIndex=${startIndex}&key=${apiKey}`)

          if (!response.data) {
            throw new Error('Something went wrong')
          }
          console.log(response.data)
          return response.data
        } catch (error: unknown) {
          if (
            axios.isAxiosError<{ error?: { message: string } }>(error)) {
            const openAiError = error.response?.data?.error?.message
            if (openAiError) {
              return thunkApi.rejectWithValue(openAiError)
            } else {
              return thunkApi.rejectWithValue(`${error.message}`)
            }
          } else {
            return thunkApi.rejectWithValue('Something went wrong')
          }
        }
      }
    )
