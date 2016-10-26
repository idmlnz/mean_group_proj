var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanproj');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var UserSchema = mongoose.Schema({
  firstName: {type: String, required: true, minlength: 1},
  email: String,
  password: String,
  kitten: [{type: mongoose.Schema.Types.ObjectId, ref: 'Kitten'}]
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);

var u = new User({
	firstName: 'fluffy', 
	email: 'fluffy',
	password: 'fluffy'
});


var KittenSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 1},
  age: Number,
  color: {type:String},
  video: {type:String},
  status: {type:String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});


var Kitten = mongoose.model('Kitten', KittenSchema);
var k = new Kitten({
	name: 'oscar', 
	age: 1,
	color: 'white',
	video: 'white'
});

/*
u.save(function (err) {
  if (err) return console.error(err);
});


k.save(function (err) {
  if (err) return console.error(err);
});

 */

User.findOne({_id:'5810ebff0de19b02a576e7f7'}, function(err, user) {
  console.log('USER: ' + user.firstName);

});



/* insert a kitten to the user
Kitten.findOne({_id:'5810ebff0de19b02a576e7f8'}, function(err, kitten) {
  console.log(kitten.name);

  User.findOne({_id:'5810ebff0de19b02a576e7f7'}, function(err, user) {

    var kk = new Kitten(kitten);

    console.log('XX user: ' + user.firstName);
    user.kitten.push(kk);

    console.log('XX kitten: ' + kk.name);
    user.save(function(err, user_result){
      console.log("user_ result:" + user_result);

      kitten.status = 'adopt';
      var kk = new Kitten(kitten);
      kk.save(function(err, kk_result){
        console.log("kk result:" + kk_result);
      });


    });

  });



});

 */


User.find({ firstName: /fluffy/i }).populate('kitten').exec(function(err, users) {
  console.log('POPULATE: ' + users) ;
  //console.log('POPULATE: ' + kitten.name) ;
});

