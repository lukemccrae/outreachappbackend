exports.up = function(knex, Promise) {
    return knex.schema.createTable('driver', table => {
        table.increments();
        table.integer('age').notNullable();
        table.integer('zip').notNullable();
        table.integer('annual_miles').notNullable();
        table.text('make').notNullable();
        table.text('model').notNullable();
        table.integer('year').notNullable();
        table.text('name');
        table.text('address');
        table.text('city');
        table.text('state');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('driver');
};
