
// === controllers/caseController.js ===
const Case = require("../model/Case");


//create and updates 
//for get all the cases
const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find().populate("customer_id assigned_to");
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//for create cases
const createCase = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
//for update case
const updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCase) return res.status(404).json({ message: "Case not found" });
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
//exporting 
module.exports = { getAllCases, createCase, updateCase };

