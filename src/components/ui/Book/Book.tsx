import { memo } from 'react'
import styles from './Book.module.scss'
import { cls } from 'utils/helpers'

interface BookProps {
  className?: string
}

export const Book = memo(({ className }: BookProps) => {
  return (
        <div
            className={cls([styles.Book, className])}
        >

        </div>
  )
})
