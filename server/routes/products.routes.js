const express = require("express");
const Products = require("../models/Products");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

//Нужен будет метод patch для обновления продукта
//И тут будет middleware использоваться, чтобы редактировать мог бы только админ
//auth
router.get("/", async (req, res) => {
  try {
    const list = await Products.find();
    // res.status(200).send(list);
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На серевере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "На серевере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
