import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BlockSearch.module.scss'
import { cls } from 'utils/helpers'
import { Input } from 'components/common/Input'
import { Button } from 'components/common/Button'
import { Search } from 'components/common/icons'
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux'
import { setSearchValue } from 'store/filter/slice.ts'
import { getCategory, getSearchValue, getSort } from 'store/filter/selectors'
import { fetchBooksData } from 'store/books/asyncActions'

interface BlockSearchProps {
  className?: string
}

export const BlockSearch = memo(({ className }: BlockSearchProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const searchValue = useAppSelector(getSearchValue)
  const sort = useAppSelector(getSort)
  const category = useAppSelector(getCategory)

  const onChangeSearchValue = useCallback((value: string) => {
    dispatch(setSearchValue(value))
  }, [dispatch])

  const startSearch = useCallback(async () => {
    if (!searchValue) return
    await dispatch(fetchBooksData({ searchValue, sort, category }))
    navigate('/')
  }, [dispatch, searchValue, sort, category, navigate])

  const startSearchByEnter = useCallback(async (event: any) => {
    if (!searchValue) return
    if (event.key === 'Enter') {
      await dispatch(fetchBooksData({ searchValue, sort, category }))
      navigate('/')
    }
  }, [dispatch, searchValue, sort, category, navigate])

  return (
        <div
            className={cls([styles.SearchBooks, className])}
        >
          <div className={styles.wrapper_search}>
              <Input
                  placeholder={'Search...'}
                  className={styles.input}
                  onChange={onChangeSearchValue}
                  onKeyDown={startSearchByEnter}
                  value={searchValue}/>
              <Button className={styles.button} onClick={startSearch}><Search/></Button>
          </div>
        </div>
  )
})
