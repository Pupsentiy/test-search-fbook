import styles from './BookDetailsPage.module.scss'
import { cls } from 'utils/helpers'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
      <div
          className={cls([styles.MainPage, className])}
      >
          NotFoundPage
      </div>
  )
}
