console.log('Users controller Loaded');

var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = (function() {
  return {

    index: function(req, res) {
      console.log('Index Method of Users controller');

      User.find({}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    },

    user: function(req, res) {
      console.log('user  rest-api  of Users controller');

      if (/* there is not @ sign set */false) {
        res.json({errors: 'no @ sign'});
      }
      else {
        var user = new User(req.body);
        console.log('user.js user: ' + user);
        console.log('user.js firstName: ' + user.firstName);
        console.log('user.js email: ' + user.email);
        console.log('user.js password: ' + user.password);
        console.log('user.js kitten: ' + user.kitten);

        user.save(function(err, data) {
          if (err) {
            console.log('create user Users controller failed: ' +  err);
            res.json(err);
          } else {
            res.json(data);
          }
        })
      }
    },

    /*
    delete: function(req, res) {
      console.log(req.params);
      Person.findOne({_id: req.params.id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          if (data) {
            Person.remove(data, function(err, data) {
              if (err) {
                console.log(err);
                res.json(err);
              } else {
                res.json(data);
              }
            })
          }
        }
      })
    },
    */

    /*
    update: function(req, res) {
      Person.findOne({_id: req.body._id}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          console.log(data);
          for (key in req.body) {
            if (key != '_id') {
              data[key] = req.body[key];
            }
          }
          console.log(data);
          data.save(function(err, data) {
            if (err) {
              console.log(err);
              res.json(err);
            } else {
              res.json(data);
            }
          })
        }
      })
    }
    */

  }
}())