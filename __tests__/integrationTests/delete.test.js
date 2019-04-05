import request from 'supertest'
import app from 'app'
import db from 'db/db'

describe('basic test for delete route', () => {
  test('I can delete a record with a delete request', async () => {
    const id = db[0].id.toString()
    const response = await request(app).delete(`/api/v1/todos/${id}`)
    expect(response.status).toBe(204)
  })
})
