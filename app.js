// Create a simple REST API using Express.js with a single route /users that returns a JSON list of users.

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./userModel");

const app = express();
app.use(cors());
app.use(express.json());

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

// const users = [
//   { id: 1, name: "Nandini", email: "nandini@gmail.com", age: 25 },
//   { id: 2, name: "Vyshnavi", email: "vyshu@gmail.com", age: 20 },
//   { id: 3, name: "Prabhakar", email: "prabha@gmail.com", age: 35 },
// ];

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.json(users);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/add-user", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = new User({
      name,
      email,
      age,
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User saved successfully", user: savedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving user", error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001/");
});
