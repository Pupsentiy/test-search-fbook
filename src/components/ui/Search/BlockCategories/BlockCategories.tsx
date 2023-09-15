import { memo, useCallback } from 'react'
import { Text } from 'components/common/Text'
import { cls } from 'utils/helpers'
import { CategoriesOptions } from 'utils/helpers/consts.ts'
import { Select } from 'components/common/Select'
import { setCategory } from 'store/filter/slice'
import { useAppDispatch } from 'utils/hooks/useRedux'

interface BlockCategoriesProps {
  className?: string
}

export const BlockCategories =
    memo(({ className }: BlockCategoriesProps) => {
      const dispatch = useAppDispatch()

      const onChangeCategory = useCallback((value: string) => {
        dispatch(setCategory(value))
      }, [dispatch])
      return (
        <div
            className={cls([className])}
        >
            <Text text={'Categories'}/>
            <Select
            onChange={onChangeCategory}
            >
                {Object.entries(CategoriesOptions).map(([key, value]) => (
                    <option key={key} value={value} >{key}</option>
                ))}
            </Select>
        </div>
      )
    })
