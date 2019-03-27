import db from '../db/db'

export default (app) => {
  app.get('/api/v1/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)

    db.map((todo) => {
      if (todo.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'todo retrieved succesfully',
          todo,
        })
      }
      return null
    })

    return res.status(404).send({
      success: 'false',
      message: 'todo does not exist',
    })
  })
}
