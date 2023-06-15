const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

// model

const People = mongoose.model('People', peopleSchema);

module.exports = People;
