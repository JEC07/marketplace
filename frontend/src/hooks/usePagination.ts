import { useEffect, useState } from 'react'

export function usePagination<T> (value: T[], sliceEnd: number) {
  const [array, setArray] = useState<T[][]>([])
  const [hiddenPagination, setHiddenPagination] = useState<boolean[]>([])

  useEffect(() => {
    if (value.length > 0) {
      let start: number = 0
      let end: number = sliceEnd
      const newArray: T[][] = []
      const newBoolean : boolean[] = [false]

      while (start < value.length) {
        newArray.push(value.slice(start, end))
        newBoolean.push(true)
        console.log(end)
        start = end
        end = end + 20
      }

      setArray(newArray)
      setHiddenPagination(newBoolean)
    }
  }, [value, sliceEnd])

  const changeHiddenPagination = (position: number) => {
    setHiddenPagination((prevState) => {
      return prevState.map((value: boolean, index: number) => {
        if (index === position) return !value
        return true
      })
    })
  }

  return {
    array,
    hiddenPagination,
    changeHiddenPagination
  }
}
