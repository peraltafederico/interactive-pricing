import cn from 'classnames'
import styles from './Switch.module.scss'

interface Props {
  className?: string
  on?: boolean
  onChange: () => void
  id: string
}

const Switch = ({ className, on, onChange, id }: Props) => {
  return (
    <label className={cn(styles.switch, className)} htmlFor={id}>
      <input type="checkbox" checked={on} onChange={onChange} />
      <span className={styles.switch__slider} />
    </label>
  )
}

export default Switch
