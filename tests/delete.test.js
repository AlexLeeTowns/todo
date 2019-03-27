import request from 'supertest'
import api from '../app'

describe('basic test for delete route', () => {
  test('I can delete a record with a delete request', async () => {
    const response = await request(api).delete('/api/v1/todos/1')
    expect(response.status).toBe(204)
  })
})
