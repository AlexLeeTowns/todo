import db from 'db/db'

export default (app) => {
  app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'todos received succesfully',
      todos: db,
    })
  })
}
