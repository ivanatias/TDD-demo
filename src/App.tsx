import { useState, useEffect, ReactElement } from 'react'
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
          {mockedProducts.products.map(
            ({ title, price, id, description, category, thumbnail }) => (
              <li key={id}>
                <div>
                  <img src={thumbnail} alt={`product thumbnail-${id}`} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>{category}</p>
                  <span>
                    <strong>{price}</strong>
                  </span>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </>
  )
}

export default App
