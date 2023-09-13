import { memo } from 'react'
import { SortOptions } from '../../../../utils/helpers/consts.ts'
import { Text } from '../../../common/Text'
import { cls } from 'utils/helpers'
import { Select } from 'components/common/Select'

interface BlockSortProps {
  className?: string
}

export const BlockSort = memo(({ className }: BlockSortProps) => {
  return (
        <div
            className={cls([className])}
        >
            <Text text={'Sorting by'}/>
            <Select>
                {Object.entries(SortOptions).map(([key, value]) => (
                    <option key={key} value={key} id={`field-sex-option-${key}`}>{value}</option>
                ))}
            </Select>
        </div>
  )
})
