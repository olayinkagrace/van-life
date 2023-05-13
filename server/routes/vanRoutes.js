const express = require('express')
const router = express()
const {
  addVan,
  deleteVan,
  getAllVans,
  getVanById,
  updateVan,
} = require("../controllers/vanController");

const requireAuth = require('../middlewares/requireAuth')



router.get("/", requireAuth,  getAllVans);
router.get("/:id",requireAuth, getVanById);
router.post("/", requireAuth, addVan);
router.put("/:id", requireAuth, updateVan);
router.delete("/:id", requireAuth, deleteVan);

module.exports = router;