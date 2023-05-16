
const express = require('express')
const router = express()
const {
  getAllUsers,
  getUserById,
  getUserByVan,
  login,
  signup,
} = require("../controllers/userController");
const requireAuth = require('../middlewares/requireAuth')


router.get("/", requireAuth, getAllUsers);
router.get("/:id",requireAuth, getUserById);
router.get("/vans/:id",requireAuth, getUserByVan);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;