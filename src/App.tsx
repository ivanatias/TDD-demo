import { useState, useEffect, ReactElement } from 'react'
import Products from '@/components/products-list'
import Wrapper from '@/components/wrapper'
import { mockedProducts } from '@/tests/utils/mocked-products'

const App = (): ReactElement => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <Wrapper>
      {/* Test #1 */}
      <h1 className='mb-4 text-3xl font-bold text-center text-blue-600'>
        Products TDD Demo
      </h1>
      {/* Test #2 */}
      {loading ? (
        <div role='progressbar' className='text-center'>
          Loading...
        </div>
      ) : (
        <Products products={mockedProducts.products} /> // Test #3
      )}
    </Wrapper>
  )
}

export default App
