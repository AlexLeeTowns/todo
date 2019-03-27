import request from 'supertest'
import api from '../app'

describe('tests for PUT requests', () => {
  let original
  let data
  beforeEach(async () => {
    original = await request(api)
      .post('/api/v1/todos')
      .send({ title: 'hello', description: 'there' })
    data = original.body.todo
  })

  test('I can make a put request', async () => {
    const merged = Object.assign(data, { title: 'new title', description: 'new desc' })
    const response = await request(api)
      .put(`/api/v1/todos/${data.id}`)
      .send(merged)
    expect(response.status).toBe(200)
    expect(response.body.todo.title).toBe(merged.title)
  })
})
