require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const {getHouses, postHome, updateHome, deleteHome} = require('./controller')

const {PORT, DB_STRING} = process.env

app.use(express.json())

massive(DB_STRING).then(db => {
    app.set('db', db)
})

app.get('/api/dashboard', getHouses)
app.post('/api/home', postHome)
app.put('/api/home/:id', updateHome)
app.delete('/api/home/:id', deleteHome)

app.listen(PORT, () => console.log(`Running on ${PORT}`))


