import db from 'db/db'

export default (req) => {
  const id = parseInt(req.params.id, 10)
  if (!Number.isInteger) {
    return {
      status: 400,
      success: 'false',
      message: 'Ids must be integers',
    }
  }
  const match = db.find(r => r.id === id)
  if (!match) {
    return {
      status: 404,
      success: 'false',
      message: `Could not find todo item with id ${req.params.id}`,
    }
  }

  return null
}
