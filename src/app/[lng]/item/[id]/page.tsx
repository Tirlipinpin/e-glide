import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { FC } from 'react'

interface IItemProps {
  params: Params
}

const Item: FC<IItemProps> = ({ params: { id } }) => {
  return (
    <main className='page'>
      Item {id}
    </main>
  )
}

export default Item
