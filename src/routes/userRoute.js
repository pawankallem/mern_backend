const express = require("express");
const router = express.Router();

const { signUp, logIn, getUser } = require("../controllers/userController");
const authenticateToken = require("../controllers/authenticateToken");

router.get("/get", authenticateToken, getUser);
router.post("/signup", signUp);
router.post("/login", logIn);

module.exports = router;
