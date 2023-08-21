const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    login: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
