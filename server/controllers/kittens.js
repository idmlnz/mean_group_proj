console.log('Kittens controller Loaded');

var mongoose = require('mongoose');
var settings = require('../config/settings.js')

var Kitten = mongoose.model('Kitten');

module.exports = (function() {
  return {

    index: function(req, res) {
      console.log('Index Method of Kittens controller');

      Kitten.find({}, function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    },

    // add one kitten to db
    kitten: function(req, res) {
      console.log('add a kitten - Kittens controller');

      if (/* there is not @ sign set */false) {
        res.json({errors: 'no @ sign'});
      }
      else {
        var kitten = new Kitten(req.body);

        kitten.save(function(err, data) {
          if (err) {
            console.log('create kitten - Kittens controller failed: ' +  err);
            res.json(err);
          } else {
            var result = {}
            res.json(data);
          }
        })
      }
    },

     // get all kitten from db
    paginate: function(req, res) {
      console.log('get paginated kittens - Kittens controller');
      console.log('req id: ', req.params.id);
      var params = {
         after: req.params.id
      };

      if (false) {
        res.json({errors: 'no @ sign'});
      }
      else {
        Kitten.paginate(params, '_id')
          .limit(settings.pagination)
          .execPagination(function(err, data) {
              if (err) {
                console.log('get all kittens -  Kittens controller failed: ' +  err);
                res.json(err);
              } else {
                console.log('perPage: ', data.perPage);
                res.json(data);
              }
          })
      }
    },

    all: function(req, res) {
      console.log('get all kittens - Kittens controller');

      if (false) {
        res.json({errors: 'no @ sign'});
      }
      else {

        Kitten.find({})
          .limit(settings.pagination)
          .exec(function (err, data) {
              if (err) {
                res.json(err);
              } else {
                res.json(data);
                console.log('ALL kittens from backend: ', data[0].name);
                console.log('ALL kittens from backend: ', data[11].name);
              }
        })

        /* -- returns  all kittens
         Kitten.find({}, function (err, data) {
              if (err) {
                res.json(err);
              } else {
                res.json(data);
              }
        })
        */

      }
    }


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