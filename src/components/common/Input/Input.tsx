import { type ChangeEvent, type InputHTMLAttributes, memo, type SyntheticEvent } from 'react'
import { cls } from 'utils/helpers'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'onKeyUp'
>
interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  onKeyUp?: (key: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = 'text',
    value,
    onChange,
    onKeyUp,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const onKeyUpHandler = (event: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
    onKeyUp?.(event.nativeEvent.key)
  }

  return (

  <input
      className={cls([className])}
      type={type}
      value={value}
      onChange={onChangeHandler}
      onKeyUp={onKeyUpHandler}
      {...otherProps}
  />
  )
})
