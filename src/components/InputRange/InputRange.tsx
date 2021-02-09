import s from './InputRange.module.scss'
import cn from 'classnames'
import { useEffect, useRef } from 'react'

interface Props {
  className?: string
  min?: number
  max?: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: number
  name: string
}

const InputRange = ({
  className,
  onChange,
  min = 1,
  max = 100,
  value = 100,
  name
}: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundImage = `linear-gradient(to right, #a4f3eb ${value}%, #ecf0fb ${value}%)`
    }
  }, [value, min, max])

  return (
    <input
      ref={ref}
      name={name}
      type="range"
      className={cn(s.range, className)}
      onChange={onChange}
      value={value}
      max="100"
      min="0"
      step="25"
    />
  )
}

export default InputRange
