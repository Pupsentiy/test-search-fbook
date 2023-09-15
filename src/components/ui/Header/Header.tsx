import { Link } from 'react-router-dom'
import { Text } from 'components/common/Text'
import { Search } from '../Search/Search.tsx'
import styles from './Header.module.scss'

export const Header = () => {
  return (
        <header
            className={styles.Header}
        >
            <Link to={'/'}>
                <Text
                    title={'Search for books'}
                    size={'l'}
                    bold={true}
                    className={styles.title}/>
            </Link>
            <Search/>
        </header>
  )
}
