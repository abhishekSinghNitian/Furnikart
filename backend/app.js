const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("./config/dbConnect");
require("dotenv").config();
const customRateLimiter = require("./middlewares/rateLimit.middleware");
// const customSizeLimiter = require("./middlewares/reqSizeLimit.middleware");
const PORT = process.env.PORT || 3000;

// Routes
const productRoutes = require("./routes/product.routes");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const orderRoutes = require("./routes/order.routes");
const cartRoutes = require("./routes/cart.routes");
const authRoutes = require("./routes/auth.routes");
const roleRoutes = require("./routes/role.routes");
const wishlistRoutes = require("./routes/wishlist.route");

// Middlewares

const corsOptions = {
  origin: "*", // Restrict to known origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: "*",
  credentials: false, // Allow cookies or tokens in requests
};

app.use(cors(corsOptions));

// Other Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// API endpoints
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/admin/products", customRateLimiter(10, 60 * 1000), productRoutes);
app.use("/api/auth", customRateLimiter(5, 60 * 1000), authRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/users", wishlistRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome TO Ecommerce");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
