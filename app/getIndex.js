import db from '../db/db'

export const findIndex = (req) => {
  const id = parseInt(req.params.id, 10)
  const todo = db.find(r => r.id === id)

  if (todo) {
    return {
      status: 200,
      success: 'true',
      message: 'todo retrieved succesfully',
      data: todo,
    }
  }

  return {
    status: 404,
    success: 'false',
    message: `Could not find todo item with id ${req.params.id}`,
  }
}

export const getIndex = (app) => {
  app.get('/api/v1/todos/:id', (req, res) => {
    const result = findIndex(req)
    return res.status(result.status).send(result)
  })
}
