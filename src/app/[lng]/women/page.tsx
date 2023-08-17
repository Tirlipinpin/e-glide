import { FC } from 'react'
import { ItemsGrid } from '@/components/itemsGrid/itemsGrid'
import { FilterBar } from '@/components/filterBar/filterBar'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'

import styles from './women.module.scss'

import items from './items.json'

interface IWomenProps {
  params: Params
}

const Women: FC<IWomenProps> = async ({ params: { lng } }) => {
  const dict = await getDictionary(lng)

  return (
    <main className='page'>
      <h1>{dict.women}</h1>
      <section className={styles.content}>
        <FilterBar dict={dict} />
        <ItemsGrid items={items} />
      </section>
    </main>
  )
}

export default Women
