const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).send({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) return res.status(403).send({ message: "Invalid token" });

    try {
      const foundUser = await User.findById(user.id);
      if (!foundUser)
        return res.status(404).send({ message: "User not found" });

      req.user = foundUser;
      next();
    } catch (error) {
      res.status(500).send({ message: "Error fetching user" });
    }
  });
};

module.exports = { authenticateToken };
