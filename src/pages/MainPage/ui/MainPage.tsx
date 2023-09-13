import { memo, useEffect } from 'react'
import { fetchBooksData } from '../../../store/books/asyncActions.ts'
import styles from './MainPage.module.scss'
import { cls } from 'utils/helpers'
import { TotalBooks } from 'components/ui/TotalItems'
import { getBooksData, getTotalBooks } from 'store/books/selectors'
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux'
import { BookCard } from 'components/ui/Book/BookCard'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  const totalBooks = useAppSelector(getTotalBooks)
  const data = useAppSelector(getBooksData)
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchBooksData('js'))
  }, [dispatch])
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
    </div>
  )
})
export default MainPage
