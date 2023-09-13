import { Text, TextAlign } from 'components/common/Text'
import { memo } from 'react'
import { cls } from 'utils/helpers'
import styles from './TotalBooks.module.scss'
import { getTotalBooks } from 'store/books/selectors'
import { useAppSelector } from 'utils/hooks/useRedux'

interface TotalBooksProps {
  className?: string
}

export const TotalBooks = memo(({ className }: TotalBooksProps) => {
  const totalBooks = useAppSelector(getTotalBooks)
  return (

    <div
        className={cls([styles.TotalBooks, className])}

    >
        <Text text={`Found ${totalBooks} results`} align={TextAlign.CENTER}/>
    </div>

  )
})
