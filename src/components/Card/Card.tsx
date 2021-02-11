import React from 'react'
import cn from 'classnames'
import s from './Card.module.scss'

interface Props {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<Props> = ({ children, className }: Props) => {
  return <div className={cn(s.card, className)}>{children}</div>
}

export default Card
