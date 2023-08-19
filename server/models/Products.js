const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    sizes: {
      type: [Number],
      required: true,
    },
    photos: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    playingThem: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Products", schema);
