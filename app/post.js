import db from '../db/db'


export default (app) => {
  app.post('/api/v1/todos', (req, res) => {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'Title is required',
      })
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'Description is required',
      })
    }

    const todo = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description,
    }
    db.push(todo)
    return res.status(201).send({
      success: 'true',
      message: 'todo added succesfully',
      todo,
    })
  })
}
