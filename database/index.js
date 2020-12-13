const mongoose = require('mongoose');
const { Schema } = mongoose;

const userData = new Schema({
  name: String,
  email: String,
  password: String,
  labels: [{
    one: String,
    two: String,
    three: String,
    four: String,
    five: String,
    six: String,
    seven: String,
    eight: String,
    nine: String,
    ten: String,
    eleven: String,
    twelve: String,
    thirteen: String,
  }],
  dataPoints: [{
    point1: Number,
    point2: Number,
    point3: Number,
    point4: Number,
    point5: Number,
    point6: Number,
    point7: Number,
    point8: Number,
    point9: Number,
    point10: Number,
    point11: Number,
    point12: Number,
    point13: Number,
  }]
});

const UserData = mongoose.model('UserData', userData);

module.exports = {
  UserData
}