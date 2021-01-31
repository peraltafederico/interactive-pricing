import styles from './Switch.module.scss'
import cn from 'classnames'

interface Props {
  className?: string
  on?: boolean
  onChange: () => void
}

const Switch = ({ className, on, onChange }: Props) => {
  return (
    <label className={cn(styles.switch, className)}>
      <input type="checkbox" checked={on} onChange={onChange} />
      <span className={styles['switch__slider']} />
    </label>
  )
}

export default Switch
