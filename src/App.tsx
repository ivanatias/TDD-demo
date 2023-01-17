import { useState, useEffect, ReactElement } from 'react'
import Products from '@/components/products-list'
import Wrapper from '@/components/wrapper'
import type { Product } from '@/models/products'
import { fetchProducts } from '@/services/fetch-products'

const App = (): ReactElement => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Test #4
  useEffect(() => {
    fetchProducts()
      .then(results => {
        setProducts(results.products)
      })
      .finally(() => {
        setLoading(false)
      })
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
        <Products products={products} /> // Test #3
      )}
      {products.length === 0 && !loading && (
        <p className='text-center'>No products</p> // Test #5
      )}
    </Wrapper>
  )
}

export default App
