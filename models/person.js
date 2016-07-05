var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true},
  name: String,
  department: String,
  groupName: String
});

module.exports = mongoose.model('Person', personSchema);
