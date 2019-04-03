import db from 'db/db'
import parseId from 'helpers/parseId'

export const deleteTodo = (req) => {
  const error = parseId(req)

  if (error) {
    return error
  }

  const id = parseInt(req.params.id, 10)
  const matchIndex = db.findIndex(r => r.id === id)

  db.splice(matchIndex, 1)
  return {
    status: 204,
    success: 'true',
    message: 'todo deleted succesfully',
  }
}

export const del = (app) => {
  app.delete('/api/v1/todos/:id', (req, res) => {
    const result = deleteTodo(req)
    return res.status(result.status).send(result)
  })
}
