import { Text } from '../../common/Text'
import { Search } from '../Search/Search.tsx'
import styles from './Header.module.scss'

export const Header = () => {
  return (
        <header
            className={styles.Header}
        >
            <Text title={'Search for books'} className={styles.title}/>
            <Search/>
        </header>
  )
}
