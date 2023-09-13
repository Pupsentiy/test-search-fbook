import { memo } from 'react'
import { cls } from 'utils/helpers'
import styles from './Text.module.scss'

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  align?: TextAlign
}

export const Text = memo(
  ({
    className,
    title,
    text,
    align = TextAlign.LEFT
  }: TextProps) => {
    return (
          <div className={cls([styles.Text, align, className])}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {text && <p className={styles.text}>{text}</p>}
          </div>
    )
  }
)
