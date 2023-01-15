import { screen } from '@testing-library/react'
import type { Product } from '@/models/products'

const assertListOfProducts = (products: Product[]): void => {
  products.forEach(product => {
    const productTitle = screen.getByText(product.title)
    const productDescription = screen.getByText(product.description)

    /* Can't use getByText here since it will throw an error because multiple elements have the same prices
       and categories.
       getAllByText returns an array of elements. We want to extract the first element of that array since
       it represents the product we want to query for and assert.
    */
    const [productPrice] = screen.getAllByText(product.price)
    const [productCategory] = screen.getAllByText(product.category)

    const productThumbnail = screen.getByRole('img', {
      name: `product thumbnail-${product.id}`
    })

    expect(productTitle).toBeInTheDocument()
    expect(productDescription).toBeInTheDocument()
    expect(productThumbnail).toBeInTheDocument()

    expect(productPrice).toHaveTextContent(productPrice.textContent as string)
    expect(productCategory).toHaveTextContent(
      productCategory.textContent as string
    )
  })
}

export { assertListOfProducts }
