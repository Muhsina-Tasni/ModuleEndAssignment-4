

// === routes/caseRoutes.js ===
const express = require("express");
const { getAllCases, createCase, updateCase } = require("../controllers/CaseController");

const router = express.Router();
router.get("/", getAllCases);
router.post("/", createCase);
router.patch("/:id", updateCase);

//exporting the case router
module.exports = router;

