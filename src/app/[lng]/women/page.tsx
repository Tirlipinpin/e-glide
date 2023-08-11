import { FC } from 'react'

import items from './items.json'
import { ItemsGrid } from '@/components/itemsGrid/itemsGrid'

const Women: FC<{}> = () => {
  return (
    <main className='page'>
      <h1>Women</h1>
      <ItemsGrid items={items} />
    </main>
  )
}

export default Women
