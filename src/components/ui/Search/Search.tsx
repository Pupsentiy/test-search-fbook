import { cls } from 'utils/helpers'
import { BlockCategories } from './BlockCategories/BlockCategories'
import { BlockSearch } from './BlockSearch/BlockSearch'
import { BlockSort } from './BlockSort/BlockSort'
import styles from './Search.module.scss'
interface SearchProps {
  className?: string
}

export const Search = ({ className }: SearchProps) => {
  return (
    <div
      className={cls([className])}
    >
        <BlockSearch className={styles.SearchBooks}/>
      <div className={styles.wrapper_selects}>
        <BlockCategories className={styles.block_base}/>
        <BlockSort className={styles.block_base}/>
      </div>
    </div>
  )
}
