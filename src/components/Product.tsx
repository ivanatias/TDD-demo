import { ReactElement } from 'react'
import type { Product as ProductType } from '@/models/products'

interface Props {
  product: ProductType
}

const Product = ({ product }: Props): ReactElement => {
  const { id, thumbnail, title, description, category, price } = product
  return (
    <li key={id}>
      <div>
        <img src={thumbnail} alt={`product thumbnail-${id}`} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
        <span>
          <strong>{price}</strong>
        </span>
      </div>
    </li>
  )
}

export default Product
