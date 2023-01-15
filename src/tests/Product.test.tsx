import { render, screen } from '@testing-library/react'
import Product from '@/components/Product'
import { mockedProducts } from './utils/mocked-products'

describe('<Product />', () => {
  it('renders a product received via props', () => {
    const [product] = mockedProducts.products

    render(<Product product={product} />)

    const productTitle = screen.getByText(product.title)
    const productDescription = screen.getByText(product.description)
    const productPrice = screen.getByText(product.price)
    const productCategory = screen.getByText(product.category)

    const productThumbnail = screen.getByRole('img', {
      name: `product thumbnail-${product.id}`
    })

    expect(productTitle).toBeInTheDocument()
    expect(productDescription).toBeInTheDocument()
    expect(productThumbnail).toBeInTheDocument()
    expect(productPrice).toBeInTheDocument()
    expect(productCategory).toBeInTheDocument()
  })
})
