const express = require('express');
const db = require('./helper.js')

const router = express.Router();

router.post('/', (req, res) => {
    let body = req.body
    console.log(body)
    db.add(body)
    .then(info => {
        res.status(201).json(info)
    }).catch(error => {
        res.status(500).send({'message': error})
    })

})

module.exports = router