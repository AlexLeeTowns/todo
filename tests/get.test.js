import { get } from 'axios'

describe('Simple test suite', () => {
  test('I can make a get request', async () => {
    const response = get('http://localhost:5000/api/v1/todos')
    expect(response.status).toBe(200)
  })
})
