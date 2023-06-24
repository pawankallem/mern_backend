const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: String,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const Shop = mongoose.model("shop", shopSchema);

module.exports = Shop;
