import bodyParser from 'body-parser'
import del from './app/delete'
import get from './app/get'
import getIndex from './app/getIndex'
import post from './app/post'
import put from './app/put'
import express from 'express';


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

del(app)
get(app)
post(app)
put(app)
getIndex(app)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
