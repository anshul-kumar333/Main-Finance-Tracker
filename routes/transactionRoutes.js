const express = require("express");
const Transaction = require("../models/Transaction");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// ADD TRANSACTION
router.post("/", protect, async (req, res) => {
    const transaction = await Transaction.create({
        ...req.body,
        userId: req.user.id
    });
    res.json(transaction);
});

// GET USER TRANSACTIONS
router.get("/", protect, async (req, res) => {
    const data = await Transaction.find({ userId: req.user.id })
        .sort({ createdAt: -1 });
    res.json(data);
});

module.exports = router;
