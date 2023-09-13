import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { cls } from 'utils/helpers'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readOnly'
>
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    readonly,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (

  <input
      className={cls([className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
  />
  )
})
