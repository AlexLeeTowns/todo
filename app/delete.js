import db from '../db/db'

export default (app) => {
    app.delete('/api/v1/todos/:id', (req, res) => {
        const id = parseInt(req.params.id, 10);
    
        db.map((todo, index) => {
            if(todo.id === id) {
                db.splice(index, 1);
                return res.status(204).send({
                    success: 'true',
                    message: 'todo deleted succesfully'
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist'
        });
    });
}
