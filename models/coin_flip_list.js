const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flip_list = new Schema({
  AccountId: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
  depo: {
    type: Number,
  },
  flip: {
    type: String,
  },
  re: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const coin_list = mongoose.model('vexedApe', flip_list);

module.exports = coin_list;