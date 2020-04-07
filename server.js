const express = require('express')
const cors = require('cors')

const contactsRoute = require('./routes/routes.js')

const server = express();

server.use(cors())
server.use(express.json())
server.options('*', cors())


// server.use('/')
server.get('/', (req, res) => {
    res.status(200).json({message: 'testing get endpoint'})
})

server.use('/contacts', contactsRoute)

module.exports = server