const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./blogRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://nandinireddy918:TKiTqSzWj48wdfiX@userdata.mknkk.mongodb.net/Test_Users"
  )
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log("Error while connecting to db");
  });

app.use("/api", blogRoutes);

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
