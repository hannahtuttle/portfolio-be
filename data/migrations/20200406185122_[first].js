
exports.up = function(knex) {
  return knex.schema.createTable('contacts', table => {
     table.increments(); 
     table.text('name', 300).notNullable();
     table.text('email', 300).notNullable();
     table.text('message').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contacts')
};
