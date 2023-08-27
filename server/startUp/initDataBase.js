const Categories = require("../models/Categories");
const Products = require("../models/Products");
const Feedback = require("../models/FeedBack");
const Sizes = require("../models/Sizes");

const productsMock = require("../mock/products.json");
const categoryMock = require("../mock/categories.json");
const feedbackMock = require("../mock/feedBack.json");
const sizesMock = require("../mock/sizes.json");

module.exports = async () => {
  const categories = await Categories.find();
  if (categories.length !== categoryMock.length) {
    await createInitialEntity(Categories, categoryMock);
  }

  const products = await Products.find();
  if (products.length !== productsMock.length) {
    await createInitialEntity(Products, productsMock);
  }

  const feedback = await Feedback.find();
  if (feedback.length !== feedbackMock.length) {
    await createInitialEntity(Feedback, feedbackMock);
  }
  ///////////////////////////////////////////////////
  const sizes = await Sizes.find();
  if (sizes.length !== sizesMock.length) {
    await createInitialEntity(Sizes, sizesMock);
  }

  async function createInitialEntity(Model, data) {
    await Model.collection.drop();
    return Promise.all(
      data.map(async (item) => {
        try {
          delete item.id;
          const newItem = new Model(item);
          await newItem.save();
          return newItem;
        } catch (error) {
          return error.message;
        }
      })
    );
  }
};
