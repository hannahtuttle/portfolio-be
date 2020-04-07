const db = require('../data/db-config.js')

function add(contacts){
    console.log(contacts)
    return db('contacts').insert(contacts)
}

module.exports = {add};