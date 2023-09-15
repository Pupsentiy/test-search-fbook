import { Text } from 'components/common/Text'
import styles from './NotFoundPage.module.scss'
import { cls } from 'utils/helpers'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
      <div
          className={cls([styles.NotFoundPage, className])}
      >
         <Text title={'Not Found Page'} />
      </div>
  )
}
