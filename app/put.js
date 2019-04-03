import db from 'db/db'
import parseId from 'helpers/parseId'

export const updateTodo = (req) => {
  const error = parseId(req)
  if (error) {
    return error
  } else if (!req.body.title) {
    return {
      status: 400,
      success: 'false',
      message: 'Title is required',
    }
  } else if (!req.body.description) {
    return {
      status: 400,
      success: 'false',
      message: 'Description is required',
    }
  }
  const id = parseInt(req.params.id, 10)
  const match = db.find(r => r.id === id)
  const matchIndex = db.findIndex(r => r.id === id)
  const updatedTodo = Object.assign(match, req.body)
  db[matchIndex] = updatedTodo

  return {
    status: 200,
    success: 'true',
    message: `Todo ${req.params.id} has been updated succesfully`,
    data: updatedTodo,
  }
}

export const put = (app) => {
  app.put('/api/v1/todos/:id', (req, res) => {
    const result = updateTodo(req)
    return res.status(result.status).send(result)
  })
}
