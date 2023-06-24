const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { singupValidation, loginValidation } = require("./validation");

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) res.status(404).send("something went wrong");

    res.status(201).json(user);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:11 ~ error:", error);
  }
};

const signUp = async (req, res) => {
  const { error } = singupValidation(req.body);
  if (error) throw error;

  try {
    const { first_name, last_name, email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) res.status(409).send("Email already exists");

    const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashPassword,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log("🚀 ~ file: userController.js:27 ~ error:", error);
  }
};

const logIn = async (req, res) => {
  const { error } = await loginValidation(req.body);
  if (error) throw error;

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) res.status(404).send("Email not registered");

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) res.status(401).send("Email or password is wrong");
    const token = jwt.sign({ email }, process.env.SECRET_KEY_TO_ACCESS, {
      expiresIn: "30000s",
    });
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log("🚀 ~ file: userController.js:51 ~ error:", error);
  }
};

module.exports = {
  signUp,
  logIn,
  getUser,
};
