import { FC } from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { ItemsGrid } from '@/components/itemsGrid/itemsGrid'
import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'

import styles from './men.module.scss'

import items from './items.json'

interface IMenProps {
  params: Params
}

const Men: FC<IMenProps> = async ({ params: { lng } }) => {
  const dict = await getDictionary(lng)

  return (
    <main className='page'>
      <h1 className={styles.header}>{dict.men}</h1>
      <ItemsGrid items={items} />
    </main>
  )
}

export default Men
