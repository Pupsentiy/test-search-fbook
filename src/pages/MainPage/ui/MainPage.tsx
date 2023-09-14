import { memo } from 'react'
import styles from './MainPage.module.scss'
import { cls } from 'utils/helpers'
import { TotalBooks } from 'components/ui/TotalItems'
import { getBooksData, getTotalBooks } from 'store/books/selectors'
import { useAppSelector } from 'utils/hooks/useRedux'
import { BookCard } from 'components/ui/Book/BookCard'
import { Button } from 'components/common/Button'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  const totalBooks = useAppSelector(getTotalBooks)
  const data = useAppSelector(getBooksData)

  console.log(data)

  return (
    <div className={cls([styles.MainPage, className])}>
        {Boolean(totalBooks) && <TotalBooks />}
      <div className={styles.wrapper_bookCard}>
        {
            Boolean(data) && data?.map((item) => (
                <BookCard key={item.id} item={item}/>
            ))
        }
      </div>
      <div className={styles.wrapper_loadMore}>
        <Button className={styles.loadMore}>
          Load more
        </Button>
      </div>
    </div>
  )
})
export default MainPage
