import { useState, useEffect, ReactElement } from 'react'

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
      {loading && <div role='progressbar'>Loading...</div>}
    </>
  )
}

export default App
