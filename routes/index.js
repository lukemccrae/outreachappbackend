var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('trying');
  console.log(req.body);
  var driver = {
    age: req.body.age,
    zip: req.body.zip,
    annual_miles: req.body.annual_miles,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state
      }

    knex('driver')
        .insert(driver, 'id')
        .then(ids => {
            res.json(ids[0])
        })
});

router.post('/:id', function(req, res, next) {
  console.log(req.body);
  var driver = {
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state
      }
    knex('driver')
        .insert(driver, 'id')
        .then(ids => {
            res.json(ids[0])
        })
});

router.get('/:id', (req, res) => {
    knex('driver')
        .where('id', req.params.id)
        .then(driver => {
            res.json({
                data: driver
            });
        });
});

module.exports = router;
