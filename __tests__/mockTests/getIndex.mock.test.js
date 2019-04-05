import { findIndex } from 'app/getIndex'
import db from 'db/db'

describe('Test of get index business logic', () => {
  test('I can find a valid item', () => {
    const id = db[0].id 
    const request = {
      params: {
        id: id,
      },
    }

    const result = findIndex(request)
    expect(result.status).toBe(200)
    expect(result.success).toBe('true')
    expect(result.message).toBe('todo retrieved succesfully')
  })
})
