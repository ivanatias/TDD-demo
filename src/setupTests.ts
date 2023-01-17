import { server } from './mocks/server.js'
import '@testing-library/jest-dom'

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
