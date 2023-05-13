
const express = require('express')
const router = express()
const {
  getAllUsers,
  getUserById,
  getUserByVan,
  login,
  signup,
} = require("../controllers/userController");


router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/vans/:id", getUserByVan);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;