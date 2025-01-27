const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

// const addressSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   postalCode: { type: String, required: true },
//   country: { type: String, required: true },
// });

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [orderItemSchema],
    // shippingAddress: {
    //   type: addressSchema,
    //   required: true,
    // },
    totalPrice: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
