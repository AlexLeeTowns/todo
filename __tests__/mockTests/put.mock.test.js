import { updateTodo } from 'app/put'
import makeTodo from 'helpers/fixtureFactory/makeTodo'
import { createTodo } from 'app/post'

describe('PUT request tests', () => {

  const makeTarget = () => {
    const body = {
      body: makeTodo(),
    }
    const target = createTodo(body)
    return target
  }

  test('Happy path', () => {
    const target = makeTarget()
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

  test('Missing title prompts a 400', () => {
    const target = makeTarget()
    const req = {
      params: {
        id: target.data.id,
      },
      body : {
        description: 'is here',
      },
    }
    const result = updateTodo(req)
    expect(result.status).toBe(400)
    expect(result.message).toEqual('Title is required')
  })

  test('Missing description prompts a 400', () => {
    const target = makeTarget()
    const req = {
      params: {
        id: target.data.id,
      },
      body: {
        title: 'is present',
      },
    }

    const result = updateTodo(req)
    expect(result.status).toBe(400)
    expect(result.message).toBe('Description is required')
  })
})
