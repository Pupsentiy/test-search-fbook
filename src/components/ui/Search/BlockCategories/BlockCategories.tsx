import { memo } from 'react'
import { Text } from '../../../common/Text'
import { cls } from 'utils/helpers'
import { CategoriesOptions } from 'utils/helpers/consts.ts'
import { Select } from 'components/common/Select'

interface BlockCategoriesProps {
  className?: string
}

export const BlockCategories = memo(({ className }: BlockCategoriesProps) => {
  return (
        <div
            className={cls([className])}
        >
            <Text text={'Categories'}/>
            <Select >
                {Object.entries(CategoriesOptions).map(([key, value]) => (
                    <option key={key} value={key} id={`field-cat-option-${key}`}>{value}</option>
                ))}
            </Select>
        </div>
  )
})
