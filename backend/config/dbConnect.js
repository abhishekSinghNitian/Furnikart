const mongoose = require("mongoose");
require("dotenv").config(); // Ensure .env variables are loaded

// Load MongoDB URI from .env file
const DB_URI = process.env.DB_URI;

// Mongoose connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

async function connectToDatabase() {
  if (!DB_URI) {
    console.error("DB_URI is not defined in .env file");
    process.exit(1); // Exit if DB_URI is missing
  }

  try {
    await mongoose.connect(DB_URI, options); // Connect to MongoDB
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
}

connectToDatabase();

module.exports = connectToDatabase; // Export the function
