const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    size_id: {
      type: Number,
    },
    sizes: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Sizes", schema);
