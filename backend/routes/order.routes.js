const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");
const {authenticateToken} = require("../middlewares/auth.middlewares");

// Get all orders
router.get("/", authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("user")
      .populate("orderItems.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
});

// Get order by ID
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("orderItems.product");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });
  }
});

// Create a new order
router.post("/create", authenticateToken, async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  try {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ message: "Items are required" });
    }

    const order = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
});

// Update an order by ID
router.put("/update/:id", authenticateToken, async (req, res) => {
  const { orderItems } = req.body;

  try {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      return res.status(400).json({ message: "Items are required for update" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderItems: orderItems },
      { new: true, runValidators: true }
    )
      .populate("user")
      .populate("orderItems.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error: error.message });
  }
});

// Delete an order by ID
router.delete("/delete/:id", authenticateToken, async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error: error.message });
  }
});

module.exports = router;