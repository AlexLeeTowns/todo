import db from '../db/db'
import parseId from '../helpers/parseId'

export const findIndex = (req) => {
  const error = parseId(req)

  if (error) {
    return error
  }
  const todo = db.find(r => r.id === parseInt(req.params.id, 10))
  return {
    status: 200,
    success: 'true',
    message: 'todo retrieved succesfully',
    data: todo,
  }
}

export const getIndex = (app) => {
  try {
    app.get('/api/v1/todos/:id', (req, res) => {
      const result = findIndex(req)
      return res.status(result.status).send(result)
    })
  } catch (error) {
    throw error
  }
}
