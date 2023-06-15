const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  correct: {
    type: Number,
    required: false,
  },
  wrong: {
    type: Number,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
});

// model

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
