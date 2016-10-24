/**
 * Created by imalonzo on 10/12/16.
 */

console.log('server  config routes is LOADED');

var Person = require('../controllers/users.js');

module.exports = function(app) {
  app.get('/people', function(req, res) {
    Person.index(req, res);
  })
  app.post('/people', function(req, res) {

    console.log('server/config/routes/user.js person: ' + req.body);
    Person.create(req, res);
  })
  app.delete('/people/:id', function(req, res) {
    Person.delete(req, res);
  })
  app.post('/edit/people', function(req, res) {
    Person.update(req, res);
  })
}
