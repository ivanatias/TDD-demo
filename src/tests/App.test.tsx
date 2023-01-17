import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import App from '@/App'

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
  })
})
