import { FC } from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'

import styles from './navbar.module.scss'

const getRouteForIndex = (index: string) => {
  switch (index) {
    case 'men': {
      return '/men'
    }
    case 'women': {
      return '/women'
    }
    default:
      return '/about-us'
  }
}

interface INavbarProps {
  lng: string
}

export const Navbar: FC<INavbarProps> = async ({ lng }) => {
  const dict = await getDictionary(lng)

  return (
    <nav className={cx(styles.navbar)}>
      <Link href='/' className={styles.logo}>🏂</Link>
      <div className={styles.modules}>
        {['men', 'women', 'about-us'].map((module) => (
          <Link
            className={styles.module}
            data-name={module}
            key={module}
            href={getRouteForIndex(module)}
          >
            {dict[module]}
          </Link>
        ))}
      </div>
    </nav>
  )
}
