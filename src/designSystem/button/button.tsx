import { FC, MouseEventHandler, ReactNode } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IButtonProps {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  shape?: 'round' | 'square'
}

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  shape = 'square'
}) => {
  return (
    <button
      className={cx(styles.button, {
        [styles.round]: shape === 'round',
        [styles.square]: shape === 'square'
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
