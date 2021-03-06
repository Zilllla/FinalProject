const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  completed: Boolean
});

const List = mongoose.model('List', listSchema);

module.exports = List;
