const mongoose = require("mongoose") ;
const Van = require('../models/vanModel') 
const User = require('../models/userModel') 

 const getAllVans = async (req, res) => {
  let vans;
  try {
    vans = await Van.find().populate("user");
  } catch (err) {
    return console.log(err);
  }
  if (!vans) {
    return res.status(404).json({ message: "No Vans Found" });
  }
  return res.status(200).json({ vans });
};

 const addVan = async (req, res) => {
  const { name, price, imageUrl, type, description, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }
  const van = new Van({
    name,
    price,
    imageUrl,
    type,
    description,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await van.save({ session });
    existingUser.vans.push(van);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ van });
};

 const updateVan = async (req, res) => {
  const { name, price, imageUrl, type, description } = req.body;
  const vanId = req.params.id;
  let van;
  try {
    van = await Van.findByIdAndUpdate(vanId, {
      name,
      price,
      imageUrl,
      type,
      description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!van) {
    return res.status(500).json({ message: "Unable To Update The Van" });
  }
  return res.status(200).json({ van });
};

 const getVanById = async (req, res) => {
  const id = req.params.id;
  let van;
  try {
    van = await Van.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!van) {
    return res.status(404).json({ message: "No Van Found" });
  }
  return res.status(200).json({ van });
};

 const deleteVan = async (req, res) => {
  const id = req.params.id;

  let van;
  try {
    van = await Van.findByIdAndRemove(id).populate("user");
    await van.user.vans.pull(van);
    await van.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!van) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};

module.exports = {
  addVan,
  deleteVan,
  getAllVans,
  getVanById,
  updateVan,
};

