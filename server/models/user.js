var mongoose = require('mongoose');

console.log('User model loaded');

var UserSchema = mongoose.Schema({
  firstName: {type: String, required: true, minlength: 1},
  email: {type:String},
  password: {type:String},
  kitten: [{type: mongoose.Schema.Types.ObjectId, ref: 'Kitten'}]
}, {timestamps: true});

mongoose.model('User', UserSchema);
