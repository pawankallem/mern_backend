const Shop = require("../models/Shop");

const getShopItems = async (req, res) => {
  try {
    const shop = await Shop.find();
    if (!shop.length > 0) res.status(404).json("Items not found");
    res.status(201).json(shop);
  } catch (error) {
    console.log("🚀 ~ file: shopController.js:6 ~ error:", error);
  }
};

module.exports = {
  getShopItems,
};
