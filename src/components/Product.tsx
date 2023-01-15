import { ReactElement } from 'react'
import type { Product as ProductType } from '@/models/products'

interface Props {
  product: ProductType
}

const Product = ({ product }: Props): ReactElement => {
  const { id, thumbnail, title, description, category, price } = product

  return (
    <li className='p-5 border border-blue-300 rounded-md'>
      <div className='flex flex-col gap-4'>
        <img
          className='object-cover rounded-[3px]'
          src={thumbnail}
          alt={`product thumbnail-${id}`}
        />
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between mb-2'>
            <h3 className='font-bold'>{title}</h3>
            <div className='px-4 py-1 rounded-md bg-slate-50 w-fit'>
              <p>{category}</p>
            </div>
          </div>
          <p>{description}</p>
          <strong>
            {price}
            <span className='ml-1'>USD</span>
          </strong>
        </div>
      </div>
    </li>
  )
}

export default Product
