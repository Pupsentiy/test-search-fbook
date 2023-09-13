import { Text } from 'components/common/Text'
import { memo } from 'react'
import { type Item } from 'store/books/types'
import { cls } from 'utils/helpers'
import styles from './BookCard.module.scss'

interface BookProps {
  className?: string
  item?: Item
}

export const BookCard = memo((props: BookProps) => {
  const { className, item } = props
  return (
        <div
            className={cls([styles.BookCard, className])}
        >
            <img
                src={item?.volumeInfo?.imageLinks?.smallThumbnail}
                className={styles.img}
                alt="image book"
            />
            <div className={styles.wrapper_info}>
                <Text text={item?.volumeInfo?.categories?.[0]} className={styles.categories}/>
                <Text text={item?.volumeInfo?.title} className={styles.title}/>
                <div className={styles.wrapper_author}>
                    {Boolean(item?.volumeInfo?.authors) &&
                        item?.volumeInfo?.authors?.map((author) => (
                            <Text key={author} text={author} className={styles.author}/>
                        ))}
                </div>
            </div>
        </div>
  )
})
