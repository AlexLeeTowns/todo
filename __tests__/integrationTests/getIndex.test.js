import request from 'supertest'
import app from 'app'
import db from 'db/db'

describe('Tests for getting individual records', () => {
  test('I can GET a document by index', async () => {
    const id = db[0].id.toString()
    const response = await request(app).get(`/api/v1/todos/${id}`)
    expect(response.status).toBe(200)
  })

  test('I get a 404 when retrieving a document out of index bounds', async () => {
    const id = db.length + 1
    const response = await request(app).get(`/api/v1/todos/${id.toString()}`)
    expect(response.status).toBe(404)
  })
})
