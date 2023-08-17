import { FC } from 'react'
import { ItemsGrid } from '@/components/itemsGrid/itemsGrid'
import items from './items.json'

const Men: FC<{}> = () => {
  return (
    <main className='page'>
      <h1>Men</h1>
      <ItemsGrid items={items} />
    </main>
  )
}

export default Men
