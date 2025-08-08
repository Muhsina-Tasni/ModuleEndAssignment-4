
// === routes/customerRoutes.js ===
const express = require("express");
const { getAllCustomers, createCustomer, updateCustomer, deleteCustomer } = require("../controllers/CustomerController");
const router = express.Router();

router.get("/", getAllCustomers);
router.post("/", createCustomer);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

//exporting the customer router
module.exports = router;
