import { createTodo } from '../../app/post'
import { deleteTodo } from '../../app/delete'
import makeTodo from '../../helpers/fixtureFactory/makeTodo'

describe('Test of deletion validation logic', () => {
  test('happy path', () => {
    const body = {
      body: makeTodo(),
    }
    const target = createTodo(body)
    const req = {
      params: {
        id: target.data.id,
      },
    }
    const result = deleteTodo(req)
    expect(result.status).toBe(204)
  })
})
