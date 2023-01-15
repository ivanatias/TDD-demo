import { render } from '@testing-library/react'
import Products from '@/components/Products'
import { mockedProducts } from '@/tests/utils/mocked-products'
import { assertListOfProducts } from '@/tests/utils/assert-list-of-products'

describe('<Products />', () => {
  it('renders a list of products received via props', () => {
    /* 
      This test is already covered in App.test.tsx but we want to strictly follow TDD practices,
      so before creating the products component, we want to make sure we write the tests for it first.
    */
    render(<Products products={mockedProducts.products} />)

    assertListOfProducts(mockedProducts.products)
  })
})
