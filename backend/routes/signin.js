const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // adjust path as needed
const bcrypt = require("bcryptjs"); // <-- Import bcrypt

const client = new OAuth2Client(
  "778536674202-moicfs49lhn173usmupmge0hg7lukn5e.apps.googleusercontent.com"
); // <-- must match frontend

router.post("/google-auth", async (req, res) => {
  const { credential } = req.body;
  console.log("Received credential:", credential); // <--- Paste here
  try {
    console.log(
      "Verifying token for audience:",
      "778536674202-moicfs49lhn173usmupmge0hg7lukn5e.apps.googleusercontent.com"
    );
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience:
        "778536674202-moicfs49lhn173usmupmge0hg7lukn5e.apps.googleusercontent.com",
    });
    const payload = ticket.getPayload();
    console.log("Google payload:", payload);

    // Find or create user
    let user = await User.findOne({ email: payload.email });
    if (!user) {
      user = await User.create({
        name: payload.name,
        email: payload.email,
        // add other fields as needed
      });
    }

    // Create your own JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Google Auth Error:", err);
    res.status(401).json({ error: "Google authentication failed" });
  }
});

// Sign in with email and password
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    // Use bcrypt to compare passwords
    if (!user.password || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({
      message: "Sign in successful",
      token,
      userData: { name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
