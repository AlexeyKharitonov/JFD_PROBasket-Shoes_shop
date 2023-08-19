const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    title1: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Categories", schema);
