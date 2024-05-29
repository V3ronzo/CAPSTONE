const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  profilePicture: { type: String },
  dreamDestination: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;