console.log('Kittens controller Loaded');

var mongoose = require('mongoose');

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
    all: function(req, res) {
      console.log('get all kittens - Kittens controller');

      var params = {
         after: "581104e8d665a50350da573a"
      };

      if (false) {
        res.json({errors: 'no @ sign'});
      }
      else {
        Kitten.paginate(params, '_id')
          .limit(20)
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