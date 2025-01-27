const express = require("express");
const Product = require("../models/product.model");
const Wishlist = require("../models/wishlist.model");
const router = express.Router();

// Add a product to the wishlist using product name
router.post("/wishlists", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const product = await Product.findOne({ _id: productId });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    let wishlist = await Wishlist.findOne({ user: userId });

    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, products: [product._id] });
    } else {
      if (wishlist.products.includes(product._id)) {
        return res
          .status(200)
          .send({ message: "Product is already in wishlist" });
      }
      await wishlist.products.push(product._id);
    }

    await wishlist.save();
    res.status(201).send(wishlist);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all products in a user's wishlist
router.get("/wishlists/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ user: userId }).populate(
      "products"
    );

    if (!wishlist) {
      return res.status(404).send({ message: "Wishlist not found" });
    }

    res.status(200).send(wishlist.products);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Remove a product from the wishlist
router.delete("/wishlists", async (req, res) => {
  const { userId, productId } = req.body;

  try {
      const wishlist = await Wishlist.findOne({ user: userId });

      if (!wishlist) {
          return res.status(404).send({ message: "Wishlist not found" });
      }

      const productIndex = wishlist.products.indexOf(productId);
      if (productIndex > -1) {
          wishlist.products.splice(productIndex, 1);
          await wishlist.save();
          res.status(200).send({ message: "Product removed from wishlist" });
      } else {
          res.status(400).send({ message: "Product not found in wishlist" });
      }
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});

module.exports = router;
