const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Categories", schema);
