import { findIndex } from 'app/getIndex'

describe('Test of get index business logic', () => {
  test('I can find item with index 1', () => {
    const request = {
      params: {
        id: 1,
      },
    }

    const result = findIndex(request)
    expect(result.status).toBe(200)
    expect(result.success).toBe('true')
    expect(result.message).toBe('todo retrieved succesfully')
  })

  test('I cannot find item with index 1000', () => {
    const request = {
      params: {
        id: 1000,
      },
    }

    const result = findIndex(request)
    expect(result.success).toBe('false')
    expect(result.status).toBe(404)
    expect(result.message).toBe(`Could not find todo item with id ${request.params.id}`)
  })
})
