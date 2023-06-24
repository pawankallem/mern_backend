const getShopItems = async (req, res) => {
  try {
    res.send("here are items");
  } catch (error) {
    console.log("🚀 ~ file: shopController.js:6 ~ error:", error);
  }
};

module.exports = {
  getShopItems,
};
