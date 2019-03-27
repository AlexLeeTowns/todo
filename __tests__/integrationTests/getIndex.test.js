import request from 'supertest'
import api from '../../app'

describe('Tests for getting individual records', () => {
  test('I can GET a document by index', async () => {
    const response = await request(api).get('/api/v1/todos/1')
    expect(response.status).toBe(200)
  })

  test('I get a 404 when retrieving a document out of index bounds', async () => {
    const response = await request(api).get('/api/v1/todos/1000')
    expect(response.status).toBe(404)
  })
})
