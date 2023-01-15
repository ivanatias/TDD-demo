import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import App from '@/App'
import { mockedProducts } from '@/tests/utils/mocked-products'

describe('<App />', () => {
  // Test #1 - Check if the app's title is properly rendered then proceed to make the test pass.
  it('correctly renders the app title', () => {
    render(<App />)
    const title = screen.getByRole('heading', { name: /products tdd /i })
    expect(title).toBeInTheDocument()
  })

  describe('WHEN requesting for products', () => {
    // Test #2 - Check if the app renders a loading indicator while waiting for products to be succesfully fetched.
    // Proceed to make the test pass later on.
    it('renders a loading indicator while fetching the products', async () => {
      render(<App />)

      // Loading flag will be true by default (when the app first loads).
      // We have to wait for it to be removed after the products have been fetched.
      await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))
    })

    // Test #3 - Check if the list of products is rendered once the app is no longer in loading state.
    // Proceed to make the test pass later on.
    it('successfully renders a list of products once the loading indicator dissapears', async () => {
      render(<App />)

      await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

      // Checking and asserting all mocked products' presence in the document.
      mockedProducts.products.forEach(product => {
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

        expect(productPrice).toHaveTextContent(
          productPrice.textContent as string
        )
        expect(productCategory).toHaveTextContent(
          productCategory.textContent as string
        )
      })
    })
  })
})
