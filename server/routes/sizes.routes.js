const express = require("express");
const Sizes = require("../models/Sizes");
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const list = await Sizes.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).json({
      message: "На серевере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
