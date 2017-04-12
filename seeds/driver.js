exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('driver').del()
        .then(function() {
            // Inserts seed entries
            return knex('driver').insert([{
              age: '24',
              zip: '80903',
              annual_miles: 200,
              make: 'honda',
              model: 'civic',
              year: 1996,
              name: 'Luke McCrae',
              address: '270 Rim View Drive J',
              city: 'Colorado Springs',
              state: 'Colorado'
                }
            ]);
        });
};
