
// === models/User.js ===
const mongoose = require("mongoose");
 
//creating user schema with mongoose
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "staff"],
    default: "staff",
  },
});
//exporting the user model
module.exports = mongoose.model("User", userSchema);

