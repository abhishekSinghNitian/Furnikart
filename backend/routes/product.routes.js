const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const { authenticateToken } = require("../middlewares/auth.middlewares");
const { checkAdminRole } = require("../middlewares/permission.middleware");

//Get productList
router.get("/", authenticateToken, async (req, res) => {
  const productList = await Product.find();

  if (!productList) {
    return res.status(500).json({ success: false });
  }

  res.status(200).send(productList);
});

// Get product by id
router.get("/:id", authenticateToken, async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(400).json({
      success: false,
      message: "Product with id " + req.params.id + " not found",
    });
  }

  res.status(200).send(product);
});

// Create a new product
router.post("/create", authenticateToken, async (req, res) => {
  try {
    const { name, imageUrl, category, description, stock, price } = req.body;

    // Create product
    const product = await Product.create({
      name,
      imageUrl,
      category,
      description,
      stock: Number(stock),
      price: Number(price),
    });

    // Respond with the created product
    return res
      .status(201)
      .send({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error creating product:", error.stack);
    return res.status(500).send({ message: "Internal server error" });
  }
});

// Delete a product
router.delete("/delete/:id", authenticateToken ,checkAdminRole, function (req, res) {
  const deletedProduct = Product.findByIdAndDelete(req.params.id);
  deletedProduct
    .then((product) => {
      if (product)
        return res
          .status(200)
          .json({ success: true, message: "product deleted successfully" });
      else
        return res
          .status(404)
          .json({ success: false, message: "product not found" });
    })
    .catch((err) => {
      return res.status(500).json({ success: false, message: err.message });
    });
});

module.exports = router;
