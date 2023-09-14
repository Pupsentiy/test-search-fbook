import { memo, useCallback } from 'react'
import styles from './BlockSearch.module.scss'
import { cls } from 'utils/helpers'
import { Input } from 'components/common/Input'
import { Button } from 'components/common/Button'
import { Search } from 'components/common/icons'
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux'
import { setSearchValue } from 'store/filter/slice.ts'
import { getSearchValue, getSort } from 'store/filter/selectors'
import { fetchBooksData } from 'store/books/asyncActions'

interface BlockSearchProps {
  className?: string
}

export const BlockSearch = memo(({ className }: BlockSearchProps) => {
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(getSearchValue)
  const sort = useAppSelector(getSort)

  const onChangeSearchValue = useCallback((value: string) => {
    dispatch(setSearchValue(value))
  }, [dispatch])

  const startSearch = useCallback(async () => {
    await dispatch(fetchBooksData({ searchValue, sort }))
  }, [dispatch, searchValue, sort])

  return (
        <div
            className={cls([styles.SearchBooks, className])}
        >
          <div className={styles.wrapper_search}>
              <Input
                  placeholder={'Search...'}
                  className={styles.input}
                  onChange={onChangeSearchValue}
                  value={searchValue}/>
              <Button className={styles.button} onClick={startSearch}><Search/></Button>
          </div>
        </div>
  )
})
