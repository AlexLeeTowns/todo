import { createTodo } from '../../app/post'
import makeTodo from '../../helpers/fixtureFactory/makeTodo'

describe('test of post request validation rules', () => {
  test('I can submit a POST request with valid title & body', () => {
    const req = {
      body: makeTodo(),
    }

    const result = createTodo(req)
    expect(result.status).toBe(201)
    expect(result.success).toBe('true')
    expect(result.message).toBe('Todo created successfully')
  })

  test('no title', () => {
    const req = {
      body: {
        description: 'test',
      },
    }
    const result = createTodo(req)
    expect(result.status).toBe(400)
    expect(result.success).toBe('false')
    expect(result.message).toBe('Title is required')
  })

  test('no desc', () => {
    const req = {
      body: {
        title: 'test',
      },
    }
    const result = createTodo(req)
    expect(result.status).toBe(400)
    expect(result.success).toBe('false')
    expect(result.message).toBe('Description is required')
  })
})
