import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('<App />', () => {
  // Test #1 - Check if the app's title is properly rendered then proceed to make the test pass.
  it('correctly renders the app title', () => {
    render(<App />)
    const title = screen.getByRole('heading', { name: /products tdd /i })
    expect(title).toBeInTheDocument()
  })
})
