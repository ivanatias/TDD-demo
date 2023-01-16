import type { ProductsResponse } from '@/models/products'
import { mockedProducts } from '@/tests/utils/mocked-products'

type RequestMethod = 'POST' | 'DELETE' | 'PUT'

interface RequestHeaders {
  'Content-Type': string
}

interface RequestConfig {
  method: RequestMethod
  headers: RequestHeaders
  body: string
}

interface MockedResults<T> {
  ok: boolean
  status: number
  json: () => Promise<T>
}

const mockedFetch = (
  url: string,
  config?: RequestConfig
): MockedResults<ProductsResponse> => {
  switch (url) {
    case 'https://dummyjson.com/products?limit=20': {
      return {
        ok: true,
        status: 200,
        json: async () => mockedProducts
      }
    }
    default:
      throw new Error(`Unhandled request: ${url}`)
  }
}

export { mockedFetch }
