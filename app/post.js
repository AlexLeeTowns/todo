import db from '../db/db'

export const createTodo = (req) => {
  if (!req.body.title) {
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

  const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description,
  }
  db.push(todo)
  return {
    status: 201,
    success: 'true',
    message: 'Todo created successfully',
    data: {
      id: db.length,
      title: req.body.title,
      description: req.body.description,
    },
  }
}

export const post = (app) => {
  app.post('/api/v1/todos', (req, res) => {
    const result = createTodo(req)
    return res.status(result.status).send(result)
  })
}
