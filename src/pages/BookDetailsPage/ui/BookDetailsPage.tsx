import { memo } from 'react'
import styles from './BookDetailsPage.module.scss'
import { cls } from 'utils/helpers'

interface BookDetailPageProps {
  className?: string
}

const BookDetailsPage = memo(({ className }: BookDetailPageProps) => {
  return (
        <div
            className={cls([styles.BookDetailPage, className])}
        >
          BookDetailsPage
        </div>
  )
})
export default BookDetailsPage
