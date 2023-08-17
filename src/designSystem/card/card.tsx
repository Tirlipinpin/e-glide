import { FC } from 'react'

import styles from './card.module.scss'

interface ICardProps {
  label: string
  description: string
  price: number
  cover: string
}

export const Card: FC<ICardProps> = ({ cover, label, description, price }) => {
  return (
    <div className={styles.card}>
      <img src={cover} alt={label} />
      <span className={styles.title}>{label}</span>
      <span className={styles.footer}>
        <small>{description}</small>
      </span>
      <div className={styles.price}>{Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' }).format(price)}</div>
    </div>
  )
}
