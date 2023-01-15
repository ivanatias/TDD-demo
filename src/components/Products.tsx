import { ReactElement } from 'react'
import Product from '@/components/product'
import type { Product as ProductType } from '@/models/products'

interface Props {
  products: ProductType[]
}

const Products = ({ products }: Props): ReactElement => {
  return (
    <ul>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
}

export default Products
