const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    feedback_id: {
      type: Number,
    },
    photo: {
      type: String,
      required: true,
    },
    name_and_info: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    order_date: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("FeedBack", schema);
