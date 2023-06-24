const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "local";
const config = require(__dirname + "/../config/config.json")[env];

module.exports = () => {
  if (env === "local") {
    mongoose.connect(config.host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } else {
    mongoose.connect(config.host);
  }
};
