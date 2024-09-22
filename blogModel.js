const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: String,
  },
  { collection: "Blogs" }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
