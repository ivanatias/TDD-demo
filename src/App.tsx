import { useState, useEffect, ReactElement } from 'react'
import Products from '@/components/products'
import { mockedProducts } from '@/tests/utils/mocked-products'

const App = (): ReactElement => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <>
      {/* Test #1 */}
      <h1>Products TDD Demo</h1>
      {/* Test #2 */}
      {loading ? (
        <div role='progressbar'>Loading...</div>
      ) : (
        <Products products={mockedProducts.products} /> // Test #3
      )}
    </>
  )
}

export default App
