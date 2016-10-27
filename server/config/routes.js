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



  /**
   * Method: post
   */
  app.post('/kitten', function(req, res) {
    console.log('server routing for Kitten creation');
    Kitten.kitten(req, res);
  });

  /**
   * Method: get
   * Param: kitten id
   *
   *  The pagination is based on the last kitten id
   *  Calling this method will return N kitten objects
   *  -- number of kittens returned is based on settings.pagination (see server/config/settings.js
   *
   */
  app.get('/kitten/:id', function(req, res) {
    console.log('server routing for Kitten get with id');
    Kitten.paginate(req, res);
  });

  /**
   * Method: get
   *
   *  Get kitten objects based on settings.pagination
   *
   */
  app.get('/kitten', function(req, res) {
    console.log('server routing for Kitten get ');
    Kitten.all(req, res);
  });
}
