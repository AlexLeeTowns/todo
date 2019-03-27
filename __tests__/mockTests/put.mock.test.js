import { updateTodo } from '../../app/put'
import makeTodo from '../../helpers/fixtureFactory/makeTodo'
import { createTodo } from '../../app/post'

describe('PUT request tests', () => {
  test('Happy path', () => {
    const originalBody = {
      body: makeTodo(),
    }
    const target = createTodo(originalBody)
    const req = {
      params: {
        id: target.data.id,
      },
      body: makeTodo(),
    }
    const result = updateTodo(req)
    expect(result.status).toBe(200)
    expect(result.data).toEqual(expect.objectContaining(req.body))
  })
})
