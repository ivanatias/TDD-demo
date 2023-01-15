import { render, screen } from '@testing-library/react'
import Products from '@/components/Products'
import { mockedProducts } from './utils/mocked-products'

describe('<Products />', () => {
  it('renders a list of products received via props', () => {
    render(<Products products={mockedProducts.products} />)

    mockedProducts.products.forEach(product => {
      const productTitle = screen.getByText(product.title)
      const productDescription = screen.getByText(product.description)
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
  })
})
