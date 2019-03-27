import request from 'supertest'
import api from '../app'


describe('Post request test suite', () => {
  test('happy path', async () => {
    const response = await request(api)
      .post('/api/v1/todos')
      .send({
        title: 'this is a test',
        description: 'of the thing',
      })
    expect(response.status).toBe(201)
  })
})
