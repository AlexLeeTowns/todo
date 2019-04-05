import request from 'supertest'
import app from 'app'

describe('Simple test suite', () => {
  test('I can make a get request', async () => {
    const response = await request(app).get('/api/v1/todos')
    expect(response.status).toBe(200)
  })
})
