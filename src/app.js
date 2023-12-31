require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connect = require("./models/index.js");
const userRoute = require("./routes/userRoute.js");
const shopRoute = require("./routes/shopRoute.js");

const PORT = process.env.PORT || 4001;
const NODE_ENV = process.env.NODE_ENV;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/user", userRoute);
app.use("/api/item", shopRoute);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(NODE_ENV);
    console.log("🚀 ~ file: app.js:20 ~ PORT:", PORT);
  } catch (error) {
    console.log("🚀 ~ file: app.js:24 ~ error:", error);
  }
});
