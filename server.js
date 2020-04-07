const express = require('express')
const cors = require('cors')

const server = express();

server.use(cors())
server.use(express.json())
server.options('*', cors())


// server.use('/')
server.get('/', (req, res) => {
    res.status(200).json({message: 'testing get endpoint'})
})

module.exports = server