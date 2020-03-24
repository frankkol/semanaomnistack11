exports.up = function(knex) {
    return knex.schema.createTable('tbl_incidents', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('tbl_ongs')
     })
};

exports.down = function(knex) {
    return knex.schema.dropTbale('tbl_incidents')
};
