import db from '../db/db'

export default (app) => {
  app.put('/api/v1/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    let todoFound
    let itemIndex
    db.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo
        itemIndex = index
      }

      return null
    })

    if (!todoFound) {
      return res.status(404).send({
        succes: 'false',
        message: 'todo not found',
      })
    } else if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      })
    } else if (!req.body.description) {
      return res.status(400).send({
        succes: 'false',
        message: 'description is required',
      })
    }

    const updatedTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title,
      description: req.body.description || todoFound.description,
    }

    db.splice(itemIndex, 1, updatedTodo)

    return res.status(200).send({
      success: 'true',
      message: 'todo updated succesfully',
      updatedTodo,
    })
  })
}
