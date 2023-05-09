const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user:[{ type: mongoose.Types.ObjectId, ref: "User", required: true}],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Van", vanSchema);
