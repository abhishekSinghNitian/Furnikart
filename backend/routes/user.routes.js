const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const {checkAdminRole} = require("../middlewares/permission.middleware");
const { authenticateToken } = require("../middlewares/auth.middlewares");
router.get("/", authenticateToken ,checkAdminRole, async (req, res) => {
  const user = await User.find();

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send(user);
});

router.get("/:id", authenticateToken ,checkAdminRole, async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send(user);
});


router.delete("/delete/:id", authenticateToken ,checkAdminRole,  async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.status(404).send({ error: "user not found" });
  }

  res.status(200).send(user);
});

module.exports = router;
