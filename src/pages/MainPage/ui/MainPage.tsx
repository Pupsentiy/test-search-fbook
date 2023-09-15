import { Button } from 'components/common/Button'
import { Text } from 'components/common/Text'
import { BookCard } from 'components/ui/Book/BookCard'
import { PageLoader } from 'components/ui/PageLoader'
import { TotalBooks } from 'components/ui/TotalItems'
import { Fragment, memo, useCallback, useMemo } from 'react'
// import { useNavigate } from 'react-router-dom'
import {
  getBooksData,
  getBooksError,
  getBooksIsLoading,
  getTotalBooks
} from 'store/books/selectors'
import { cls } from 'utils/helpers'
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux'
import { fetchBooksLoadMoreData } from 'store/books/asyncActions.ts'
import {
  getCurrentPage,
  getCurrentSearch,
  getSearchValue
} from 'store/filter/selectors.ts'
import styles from './MainPage.module.scss'
import { setCurrentPage } from 'store/filter/slice'

// import { Loader } from 'components/common/Loader/Loader'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  const dispatch = useAppDispatch()
  const totalBooks = useAppSelector(getTotalBooks)
  const data = useAppSelector(getBooksData)
  const isLoading = useAppSelector(getBooksIsLoading)
  const error = useAppSelector(getBooksError)
  const searchValue = useAppSelector(getSearchValue)
  const currentSearch = useAppSelector(getCurrentSearch)
  const currentPage = useAppSelector(getCurrentPage)
  console.log(data)
  console.log(error)

  const onClickLoadMore = useCallback(async () => {
    dispatch(setCurrentPage())
    if (totalBooks === data?.length) return
    await dispatch(fetchBooksLoadMoreData({ searchValue, currentPage }))
  }, [dispatch, searchValue, totalBooks, data, currentPage])

  const BooksCardList = useMemo(() => data?.map((item) => (
      <BookCard key={item?.etag} item={item}/>
  )), [data])

  if (isLoading) {
    return (
        <PageLoader/>
    )
  }

  if (error) {
    const err = String(error)
    return (<div className={styles.error_search}>
        <Text title={err} />
      </div>)
  }

  if (searchValue && !data && totalBooks === 0) {
    return (
        <div className={styles.error_search}>
          <Text title={`There is no book on such ${currentSearch} request`} />
        </div>
    )
  }

  return (
    <div className={cls([styles.MainPage, className])}>
        {Boolean(totalBooks) && <TotalBooks />}
        { data
          ? <Fragment>
          <div className={styles.wrapper_bookCard}>
              {
                BooksCardList
              }
          </div>
          <div className={styles.wrapper_loadMore}>
            {
                totalBooks !== data?.length &&
                <Button className={styles.loadMore} onClick={onClickLoadMore}>
                  Load more
                </Button>
            }
          </div>
      </Fragment>
          : <div className={styles.title}>
              <Text title={'Let Start to find your first book'} />
            </div>
}
    </div>
  )
})
export default MainPage
