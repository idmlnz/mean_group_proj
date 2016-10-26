/**
 * Created by imalonzo on 10/12/16.
 */

console.log('server  config routes is LOADED');

var User = require('../controllers/users.js');
var Kitten = require('../controllers/kittens.js');

module.exports = function(app) {
  //-- index




  //-- user routes
  app.post('/user', function(req, res) {
    console.log('server routing for User creation');
    User.user(req, res);
  });


  /*
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
  */

  //-- add one kitten
  app.post('/kitten', function(req, res) {
    console.log('server routing for Kitten creation');
    Kitten.kitten(req, res);
  });

  //-- get all kittens
  app.get('/kitten', function(req, res) {
    console.log('server routing for Kitten creation');
    Kitten.all(req, res);
  });

}
