var mongoose = require('mongoose');
var paginator = require('mongoose-paginator');

console.log('Kitten model loaded');

var KittenSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 1},
  age: Number,
  color: String,
  video: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});


KittenSchema.plugin(paginator, {
  limit: 5,
  defaultKey: '_id',
  direction: 1
});

mongoose.model('Kitten', KittenSchema);
