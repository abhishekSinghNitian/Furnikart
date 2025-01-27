const Category = require("../models/category.model");
const express = require("express");
const router = express.Router();

//Get categoryList
router.get("/", async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    return res.status(500).json({ success: false });
  }

  res.status(200).send(categoryList);
});

// Get category by id
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(400).json({
      success: false,
      message: "Category with id " + req.params.id + " not found",
    });
  }

  res.status(200).send(category);
});

// Create a new category
router.post("/create", async (req, res) => {
  const { name, image } = req.body;

  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    return res.status(409).send(`Category is already registered with ${name}`);
  }

  let category = await Category.create({
    name,
    image,
  });

  if (!category) return res.status(404).send("category not found");

  return res.status(200).send(category);
});

// Delete a category
router.delete("/delete/:id", function (req, res) {
  const deletedCategory = Category.findByIdAndDelete(req.params.id);
  deletedCategory
    .then((category) => {
      if (category)
        return res
          .status(200)
          .json({ success: true, message: "category deleted successfully" });
      else
        return res
          .status(404)
          .json({ success: false, message: "category not found" });
    })
    .catch((err) => {
      return res.status(500).json({ success: false, message: err.message });
    });
});

module.exports = router;
