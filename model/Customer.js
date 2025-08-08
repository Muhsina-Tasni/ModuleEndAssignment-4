
// === models/Customer.js ===
const mongoose = require("mongoose");

//creating schema with customer  mongoose
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact_info: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});
//exportinng the customer model
module.exports = mongoose.model("Customer", customerSchema);

