import request from 'supertest'
import api from '../app'

describe('Simple test suite', () => {
  test('I can make a get request', async () => {
    const response = await request(api).get('/api/v1/todos')
    expect(response.status).toBe(200)
  })
})
