import type { ProductsResponse } from '@/models/products'

const fetchProducts = async (): Promise<ProductsResponse> => {
  const res = await fetch('https://dummyjson.com/products?limit=20')

  if (!res.ok) throw new Error('Error retrieving products')

  return res.json()
}

export { fetchProducts }
