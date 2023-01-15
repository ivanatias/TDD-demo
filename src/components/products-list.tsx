import { ReactElement } from 'react'
import Product from '@/components/single-product'
import type { Product as ProductType } from '@/models/products'

interface Props {
  products: ProductType[]
}

const Products = ({ products }: Props): ReactElement => {
  return (
    <ul className='flex flex-col gap-5'>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default Products
