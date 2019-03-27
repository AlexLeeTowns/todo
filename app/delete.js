import db from '../db/db'

export const deleteTodo = (req) => {
  const id = parseInt(req.params.id, 10)

  const match = db.find(r => r.id === id)
  const matchIndex = db.findIndex(r => r.id === id)

  if (!match) {
    return {
      status: 404,
      success: 'false',
      message: `Could not find todo item with id ${req.params.id}`,
    }
  }

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
