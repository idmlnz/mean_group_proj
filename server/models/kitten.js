var mongoose = require('mongoose');

console.log('Kitten model loaded');

var KittenSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 1},
  age: {type:String},
  color: {type:String},
  video: {type:String},
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});

mongoose.model('Kitten', KittenSchema);
