import { render, screen } from '@testing-library/react'
import Wrapper from '@/components/wrapper'

describe('<Wrapper />', () => {
  it('render all its children', () => {
    render(
      <Wrapper>
        <div>Test</div>
      </Wrapper>
    )

    const test = screen.getByText(/test/i)
    expect(test).toBeInTheDocument()
  })
})
