const express = require("express");
const Products = require("../models/Products");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

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

router
  .route("/:productId")
  .patch(auth, async (req, res) => {
    try {
      const { productId } = req.params;
      const updatedProduct = await Products.findByIdAndUpdate(
        productId,
        req.body,
        {
          new: true,
        }
      );

      res.send(updatedProduct);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const { productId } = req.params;

      await Products.findByIdAndRemove(productId);
      return res.send(null);
    } catch (error) {
      res.status(500).json({
        message: "На сервере произошла ошибка. Попробуйте позже",
      });
    }
  });

module.exports = router;
