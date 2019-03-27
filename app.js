/* eslint-disable indent */
import bodyParser from 'body-parser'
import express from 'express'
import del from './app/delete'
import get from './app/get'
import getIndex from './app/getIndex'
import post from './app/post'
import put from './app/put'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

del(app)
get(app)
post(app)
put(app)
getIndex(app)

const PORT = 5000

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server running on ${PORT}`)
    })
}

export default app
