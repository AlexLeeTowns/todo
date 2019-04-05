import db from 'db/db'
import parseId from 'helpers/parseId'

describe('Tests for error flow business logic', () => {
  test('Index out of bounds prompts an error', () => {
    const id = db.length + 1

    const req = {
      params: {
        id: id,
      },
    }
    const result = parseId(req)
    expect(result.status).toBe(404)
    expect(result.message).toBe(`Could not find todo item with id ${req.params.id}`)
  })
  test('Non integer parseable ID returns error', () => {
    const id = 'test'

    const req = {
      params: {
        id: 'not an integer',
      },
    }
    const result = parseId(req)
    expect(result.status).toBe(400)
    expect(result.message).toBe('Ids must be integers')
  })
  test('Returns null if id is parseable', () => {
    const id = db[0].id

    const req = {
      params: {
        id: id,
      },
    }

    const result = parseId(req)
    expect(result).toBe(null)
  })
})