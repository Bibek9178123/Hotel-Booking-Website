const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  // password: { type: String, required: false }, // comment this out
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
