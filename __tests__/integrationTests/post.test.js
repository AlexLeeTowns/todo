import request from 'supertest'
import app from 'app'
import makeTodo from 'helpers/fixtureFactory/makeTodo'


describe('Post request test suite', () => {
  test('happy path', async () => {
    const response = await request(app)
      .post('/api/v1/todos')
      .send(makeTodo())
    expect(response.status).toBe(201)
  })
})
