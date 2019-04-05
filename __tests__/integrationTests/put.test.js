import request from 'supertest'
import app from 'app'
import makeTodo from 'helpers/fixtureFactory/makeTodo'

describe('tests for PUT requests', () => {
  test('I can make a put request', async () => {
    const original = await request(app)
      .post('/api/v1/todos')
      .send({ title: 'hello', description: 'there' })
    const originalData = original.body.data
    const merged = Object.assign(originalData, makeTodo())
    const response = await request(app)
      .put(`/api/v1/todos/${originalData.id}`)
      .send(merged)
    expect(response.status).toBe(200)
    expect(response.body.data.title).toBe(merged.title)
  })
})
