import { useState } from 'react'

export const useCarousel = (arrayLength: number) => {
  const [position, setPosition] = useState<number>(0)

  const increase = () => {
    let next = position + 1

    if (next === arrayLength) {
      next = 0
    }

    setPosition(next)
  }

  const decrease = () => {
    let prev = position - 1

    if (prev === -1) {
      prev = arrayLength - 1
    }

    setPosition(prev)
  }

  return {
    position,
    increase,
    decrease
  }
}
