import { memo } from 'react'
import styles from './MainPage.module.scss'
import { cls } from 'utils/helpers'
import { TotalBooks } from 'components/ui/TotalItems'
import { getTotalBooks } from 'store/books/selectors'
import { useAppSelector } from 'utils/hooks/useRedux'

interface MainPageProps {
  className?: string
}

const MainPage = memo(({ className }: MainPageProps) => {
  const totalBooks = useAppSelector(getTotalBooks)
  return (
    <div className={cls([styles.MainPage, className])}>
        {Boolean(totalBooks) && <TotalBooks />}
    </div>
  )
})
export default MainPage
