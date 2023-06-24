require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connect = require("./models/index.js");
const userRoute = require("./routes/userRoute.js");
const shopRoute = require("./routes/shopRoute.js");

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/user", userRoute);
app.use("/api/item", shopRoute);

app.listen(PORT, async () => {
  console.log("🚀 ~ file: app.js:20 ~ PORT:", PORT);
  await connect();
});
