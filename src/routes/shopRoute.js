const express = require("express");
const router = express.Router();

const authenticateToken = require("../controllers/authenticateToken");
const { getShopItems } = require("../controllers/shopController");

router.get("", authenticateToken, getShopItems);

module.exports = router;
