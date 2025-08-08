
// === models/Case.js ===
const mongoose = require("mongoose");

// creating case schema with mongoose
const caseSchema = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  assigned_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
//exporting the case model
module.exports = mongoose.model("Case", caseSchema);

