import { memo } from 'react'
import { cls } from 'utils/helpers'
import styles from './Text.module.scss'

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export type TextSize = 's' | 'm' | 'l'

interface TextProps {
  className?: string
  title?: string
  text?: string
  align?: TextAlign
  size?: TextSize
  bold?: boolean
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToClass: Record<TextSize, string> = {
  s: styles.size_s,
  m: styles.size_m,
  l: styles.size_l
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1'
}

export const Text = memo(
  ({
    className,
    title,
    text,
    align = TextAlign.LEFT,
    size = 'm',
    bold
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size]
    const sizeClass = mapSizeToClass[size]

    return (
          <div className={cls([styles.Text, align, className, sizeClass], {
            [styles.bold]: Boolean(bold)
          })}>
            {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
            {text && <p className={styles.text}>{text}</p>}
          </div>
    )
  }
)
