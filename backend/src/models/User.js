const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  inviteCode: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
