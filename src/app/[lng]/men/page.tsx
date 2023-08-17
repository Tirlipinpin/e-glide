import { FC } from 'react'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { ItemsGrid } from '@/components/itemsGrid/itemsGrid'
import { getDictionary } from '@/app/[lng]/dictionaries/dictionaries'
import { FilterBar } from '@/components/filterBar/filterBar'

import items from './items.json'

interface IMenProps {
  params: Params
}

const Men: FC<IMenProps> = async ({ params: { lng } }) => {
  const dict = await getDictionary(lng)

  return (
    <main className='page'>
      <h1>{dict['men']}</h1>
      <FilterBar dict={dict} />
      <ItemsGrid items={items} />
    </main>
  )
}

export default Men
