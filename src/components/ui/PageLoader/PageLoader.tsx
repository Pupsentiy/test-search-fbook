import { memo } from 'react'
import { Loader } from '../../common/Loader/Loader.tsx'
import styles from './PageLoader.module.scss'
import { cls } from 'utils/helpers'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return (
        <div
            className={cls([styles.PageLoader, className])}
        >
            <Loader/>
        </div>
  )
})
