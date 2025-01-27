const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../middlewares/auth.middlewares");
// const { body, validationResult } = require("express-validator");
const { validateInput } = require("../utils/inputValidation");
const { validateEmail } = require("../utils/inputValidation");
const Permission = require("../models/permissions.model");
//signup
router.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const validationMessages = validateInput(username, password, email);
    if (validationMessages.usernameMessage) {
      return res
        .status(400)
        .send({ message: validationMessages.usernameMessage });
    }
    if (validationMessages.passwordMessage) {
      return res
        .status(400)
        .send({ message: validationMessages.passwordMessage });
    }
    if (validationMessages.emailMessage) {
      return res.status(400).send({ message: validationMessages.emailMessage });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send({ message: "User already exists" });
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: "Server error" });
    }
  })
);

//login
router.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const validationMessage = validateEmail(email);
    if (validationMessage) {
      return res.status(400).send({ message: validationMessage });
    }
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (err) {
          return res.status(500).send({ message: "Error comparing passwords" });
        }
        if (result) {
          // Find the user's permission
          const permission = await Permission.findOne({ userId: user._id }); // Set the isAdmin field based on the permission
          if (permission) {
            user.isAdmin = permission.roleId === 1;
          }
          // Generate a token
          const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h", // Token expires in 1 hour
            }
          );
          res.status(200).send({ user, token });
        } else {
          res.status(401).send({ message: "invalid email or password" });
        }
      });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  })
);

//profile

router.get(
  "/profile",
  authenticateToken,
  asyncHandler(async (req, res) => {
    res.status(200).send(req.user);
  })
);

//update profile

router.put(
  "/profile",
  authenticateToken,
  asyncHandler(async (req, res) => {
    const { username, email, password} = req.body;
    const user = req.user;

    if (username) user.username = username;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    await user.save();
    res.status(200).send({ message: "Profile updated successfully", user });
  })
);

router.post("/logout", (req, res) => {
  res.status(200).send({ message: "Logged out" });
});

module.exports = router;
