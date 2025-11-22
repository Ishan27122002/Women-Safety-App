const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");
const authMiddleware = require("../middleware/authMiddleware"); // ✅ import once at the top

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, emergencyContacts } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      emergencyContacts
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "You are authorized to access this protected route" });
});

// Logout
router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
