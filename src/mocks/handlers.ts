import { rest } from 'msw'
import { mockedProducts } from '@/tests/utils/mocked-products'

const handlers = [
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedProducts))
  })
]

export { handlers }
