const knex = require('knex');

const config = require('../knexfile.js')

const db = knex(config.develepment);


module.exports = db;