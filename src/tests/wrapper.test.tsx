import { render, screen } from '@testing-library/react'
import Wrapper from '@/components/wrapper'

describe('<Wrapper />', () => {
  it('renders all its children', () => {
    render(
      <Wrapper>
        <div>Test</div>
      </Wrapper>
    )

    const test = screen.getByText(/test/i)
    expect(test).toBeInTheDocument()
  })
})
