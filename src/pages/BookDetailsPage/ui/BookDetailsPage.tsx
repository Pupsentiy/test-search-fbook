import { memo, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'components/common/Text'
import styles from './BookDetailsPage.module.scss'
import { cls } from 'utils/helpers'
import { getBooksData } from 'store/books/selectors'
import { useAppSelector } from 'utils/hooks/useRedux'
import noImg from 'assets/img/as.gif'
import { Button } from 'components/common/Button'

interface BookDetailPageProps {
  className?: string
}

const BookDetailsPage = memo(({ className }: BookDetailPageProps) => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const data = useAppSelector(getBooksData)

  useEffect(() => {
    if (!data?.length) {
      navigate('/', { replace: true })
    }
  }, [data, navigate])

  const onClickBack = () => {
    navigate('/')
  }

  if (!id) {
    return (
            <div>Oops книги нет</div>
    )
  }

  const currentBook = data?.find(item => item.id === id)

  const img = currentBook?.volumeInfo?.imageLinks?.thumbnail
  const authors = currentBook?.volumeInfo.authors?.join(', ')
  const title = currentBook?.volumeInfo?.title
  const categories = currentBook?.volumeInfo?.categories?.join(' / ')
  const description = currentBook?.volumeInfo?.description

  return (
        <div
            className={cls([styles.BookDetailPage, className])}
        >
          <div className={styles.wrapper_img}>
            <img src={img || noImg} alt="image book" className={styles.img}/>
          </div>
          <div className={styles.wrapper_info}>
            <Text text={categories}/>
            <Text title={title} bold className={styles.title}/>
            <Text text={authors} className={styles.authors}/>
            {Boolean(description) &&
                <div className={styles.wrapper_desc}>
                  <Text text={description}/>
                </div>
            }
            <Button className={styles.back} onClick={onClickBack}>Back</Button>
          </div>
        </div>
  )
})
export default BookDetailsPage
