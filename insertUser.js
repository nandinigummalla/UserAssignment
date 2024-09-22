const mongoose = require("mongoose");
const User = require("./userModel");

mongoose
  .connect(
    "mongodb+srv://nandinireddy918:TKiTqSzWj48wdfiX@userdata.mknkk.mongodb.net/Test_Users"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const newUser = new User({
  name: "Purni",
  email: "purni@example.com",
  age: 20,
});

newUser
  .save()
  .then((user) => {
    console.log("User saved:", user);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error saving user:", err);
    mongoose.connection.close();
  });
