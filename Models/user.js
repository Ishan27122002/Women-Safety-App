const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emergencyContacts: [{ type: String }] // Array of phone numbers or emails
});

module.exports = mongoose.model("User", userSchema);

