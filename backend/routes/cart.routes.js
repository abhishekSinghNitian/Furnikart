const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model");
const { authenticateToken } = require("../middlewares/auth.middlewares");
const { checkAdminRole } = require("../middlewares/permission.middleware");

router.get("/", authenticateToken, async (req, res) => {
  const productList = await Cart.find();

  if (!productList) {
    return res.status(500).json({ success: false });
  }

  res.status(200).send(productList);
});

router.post("/add", authenticateToken, async (req, res) => {
  try {
    const { name, imageUrl, description } = req.body;
    const product = await Cart.create({
      name,
      imageUrl,
      description,
    });
    return res
      .status(201)
      .send({ message: "Product added to cart successfully", product });
  } catch (error) {
    console.error("Error adding product to cart:", error.stack);
    return res.status(500).send({ message: "Internal server error" });
  }
});

// Delete a product
router.delete(
  "/delete/:id",
  authenticateToken,
  checkAdminRole,
  function (req, res) {
    const deletedCartProduct = Cart.findByIdAndDelete(req.params.id);
    deletedCartProduct
      .then((product) => {
        if (product)
          return res.status(200).json({
            success: true,
            message: "product from cart removed successfully",
          });
        else
          return res
            .status(404)
            .json({ success: false, message: "product not found" });
      })
      .catch((err) => {
        return res.status(500).json({ success: false, message: err.message });
      });
  }
);

module.exports = router;
