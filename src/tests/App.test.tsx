import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import App from '@/App'
import { mockedProducts } from '@/tests/utils/mocked-products'
import { assertListOfProducts } from '@/tests/utils/assert-list-of-products'
import { server } from '@/mocks/server'
import { rest } from 'msw'
// import { mockedFetch } from '@/tests/utils/mocked-fetch'

// Mocking fetch
// See @tests/utils/mocked-fetch to check the implementation.
// NOTE: This is a valid approach but it's not the best choice -> MSW (Mock Service Worker) usage is better.
// This will be included later on.

// Saving an unmocked reference of fetch for cleanup.
// const unmockedFetch = global.fetch

/* beforeEach(() =>
jest.spyOn(global, 'fetch').mockImplementation(mockedFetch as jest.Mock)
) */

/* afterEach(() => {
  global.fetch = unmockedFetch
}) */

describe('<App />', () => {
  // Test #1 - Check if the app's title is properly rendered then proceed to make the test pass.
  it('correctly renders the app title', async () => {
    render(<App />)

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

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
      assertListOfProducts(mockedProducts.products)
    })

    // Test #4 - Basically the same as Test #3 but now we are mocking the http request.
    it('fetchs a list of products from the API and render it once the loading indicator dissapears', async () => {
      // const urlForRequest = 'https://dummyjson.com/products?limit=20'

      render(<App />)

      await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

      assertListOfProducts(mockedProducts.products)

      // expect(global.fetch).toHaveBeenCalledTimes(1)
      // expect(global.fetch).toHaveBeenCalledWith(urlForRequest)
    })

    // Test #5 - Check if the app renders a no products message
    it('renders a "No products" message if no products are available from request', async () => {
      // Mocking fetch's return value only for this test to make it return an empty list of products
      // Since we are modifying the global object, this can affect other tests.
      // That's why we are saving an unmocked reference to global.fetch and restoring it after each test.
      /* global.fetch = jest.fn().mockReturnValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ products: [] })
      }) */

      server.use(
        rest.get('https://dummyjson.com/products', (req, res, ctx) => {
          return res(ctx.status(200), ctx.json({ products: [] }))
        })
      )

      render(<App />)

      await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

      const noResults = screen.getByText(/no products/i)
      expect(noResults).toBeInTheDocument()
    })
  })
})
