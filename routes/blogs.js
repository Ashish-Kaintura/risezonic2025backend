const express = require("express");
const router = express.Router();
const BlogModal = require("../models/Blog");

// GET all Blogs
router.get("/", async (req, res) => {
  try {
    const blog = await BlogModal.find();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new Blog
router.post("/", async (req, res) => {
  try {
    const newBlog = new BlogModal(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT (update) a Blog by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedBlog = await BlogModal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a Blog by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await BlogModal.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;
