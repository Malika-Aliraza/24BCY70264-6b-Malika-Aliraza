const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Example protected route
router.get("/balance", authMiddleware, (req, res) => {
  // You can use req.user.id here
  res.json({ message: `Welcome user ${req.user.id}, your balance is $5000` });
});

module.exports = router;