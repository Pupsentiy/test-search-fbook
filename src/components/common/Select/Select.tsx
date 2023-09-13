import { forwardRef, type SelectHTMLAttributes } from 'react'
import { cls } from 'utils/helpers'
import styles from './Select.module.scss'
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, children, placeholder, ...otherProps } = props

  return (
      <select
          ref={ref}
          className={cls([styles.Select, className])}
          {...otherProps}
      >
        {children}
      </select>
  )
})
