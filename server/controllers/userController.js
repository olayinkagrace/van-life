const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Van = require("../models/vanModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.log(err);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }

  return res.status(200).json({ users });
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  let userVans;
  try {
    userVans = await User.findById(userId).populate("vans");
  } catch (err) {
    return console.log(err);
  }
  if (!userVans) {
    return res.status(404).json({ message: "No Van Found" });
  }
  return res.status(200).json({ user: userVans });
};

const getUserByVan = async (req, res) => {
  const vanId = req.params.id;
  let userVans;
  try {
    userVans = await Van.findById(vanId).populate("user");
  } catch (err) {
    return console.log(err);
  }
  if (!userVans) {
    return res.status(404).json({ message: "No Van Found" });
  }
  return res.status(200).json({ user: userVans });
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({
      _id: user._id,
      email: user.email,
      token: createToken(user),
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByVan,
  signup,
  login,
};
