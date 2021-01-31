import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({ children, className, ...props }: Props) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
