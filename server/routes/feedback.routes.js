const express = require("express");
const FeedBack = require("../models/FeedBack");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await FeedBack.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На серевере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
