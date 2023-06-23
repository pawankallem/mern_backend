const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "local";
const config = require(__dirname + "/../config/config.json")[env];

module.exports = () => {
  mongoose.connect(config.host, {
    useNewUrlParser: config.useNewUrlParser,
    useUnifiedTopology: config.useUnifiedTopology,
  });
};
