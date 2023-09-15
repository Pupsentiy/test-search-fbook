import { Text } from 'components/common/Text'
import { memo } from 'react'
import { type Item } from 'store/books/types'
import { cls } from 'utils/helpers'
import styles from './BookCard.module.scss'
import { Link } from 'react-router-dom'
import noImg from 'assets/img/as.gif'

interface BookProps {
  className?: string
  item?: Item
}

export const BookCard = memo((props: BookProps) => {
  const { className, item } = props

  if (!item?.id) {
    return
  }

  const img = item?.volumeInfo?.imageLinks?.smallThumbnail
  const category = item?.volumeInfo?.categories?.[0]
  const title = item?.volumeInfo?.title
  const author = item?.volumeInfo?.authors?.join(', ')

  return (
        <Link
            className={cls([styles.BookCard, className])}
            to={`/book/${item?.id}`}
        >
            <img
                src={img || noImg}
                className={styles.img}
                alt="image book"
            />
            <div className={styles.wrapper_info}>
                <Text text={category} className={styles.categories}/>
                <Text text={title} className={styles.title} bold={true}/>
                <div className={styles.wrapper_author}>
                            <Text key={author} text={author} className={styles.author}/>
                </div>
            </div>
        </Link>
  )
})
