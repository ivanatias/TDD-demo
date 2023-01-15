import { useState, useEffect, ReactElement } from 'react'
import Product from '@/components/Product'
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
        <ul>
          {/* Test #3 */}
          {mockedProducts.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  )
}

export default App
