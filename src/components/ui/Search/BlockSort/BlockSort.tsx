import { memo, useCallback } from 'react'
import { Text } from '../../../common/Text'
import { cls } from 'utils/helpers'
import { Select } from 'components/common/Select'
import { SortOptions } from 'utils/helpers/consts'
import { useAppDispatch } from 'utils/hooks/useRedux'
import { setSort } from 'store/filter/slice'

interface BlockSortProps {
  className?: string
}

export const BlockSort = memo(({ className }: BlockSortProps) => {
  const dispatch = useAppDispatch()

  const onChangeSort = useCallback((value: string) => {
    dispatch(setSort(value))
  }, [dispatch])

  return (
        <div
            className={cls([className])}
        >
            <Text text={'Sorting by'}/>
            <Select onChange={onChangeSort}>
                {Object.entries(SortOptions).map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                ))}
            </Select>
        </div>
  )
})
