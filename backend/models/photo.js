const mongoose = require('mongoose');
const { Schema } = mongoose;

const photoSchema = new Schema({
  title: String,
  url : String,
  filename : String
});

module.exports = mongoose.model("photos", photoSchema);