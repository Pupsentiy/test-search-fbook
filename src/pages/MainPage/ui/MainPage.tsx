import { Fragment, memo } from 'react'
import styles from './MainPage.module.scss'
import { cls } from 'utils/helpers'
import { TotalBooks } from 'components/ui/TotalItems'
import {
  getBooksData,
  getBooksError,
  getBooksIsLoading,
  getTotalBooks
} from 'store/books/selectors'
import { useAppSelector } from 'utils/hooks/useRedux'
import { BookCard } from 'components/ui/Book/BookCard'
import { Button } from 'components/common/Button'
import { PageLoader } from 'components/ui/PageLoader'
// import { Loader } from 'components/common/Loader/Loader'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  const totalBooks = useAppSelector(getTotalBooks)
  const data = useAppSelector(getBooksData)
  const isLoading = useAppSelector(getBooksIsLoading)
  const error = useAppSelector(getBooksError)
  console.log(error)

  if (isLoading) {
    return (
        <PageLoader/>
    )
  }

  return (
    <div className={cls([styles.MainPage, className])}>
        {Boolean(totalBooks) && <TotalBooks />}
        { Boolean(data) &&
      <Fragment>
          <div className={styles.wrapper_bookCard}>
              {
                   data?.map((item) => (
                         <BookCard key={item.etag} item={item}/>

                   ))
              }
          </div>
          <div className={styles.wrapper_loadMore}>
              <Button className={styles.loadMore}>
                  Load more
              </Button>
          </div>
      </Fragment>
}
    </div>
  )
})
export default MainPage
