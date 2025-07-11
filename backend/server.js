require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); // <-- Only once!
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// CORS middleware (only once)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());

// Connect to MongoDB using env variable
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,
    address: String,
    dob: String, // Date of Birth as string (e.g., "1990-01-01")
    totalBooking: { type: Number, default: 0 },
    wishlist: { type: [String], default: [] }, // Array of hotel IDs or names
    favorites: [{ type: Number }], // store hotel IDs
  },
  { timestamps: true }
); // This adds createdAt automatically

const User = mongoose.model("User", userSchema);

// Sign up endpoint
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created!" });
  } catch (err) {
    res.status(400).json({ error: "Email already exists or invalid data." });
  }
});

// Middleware to verify JWT and attach user to req
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next(); // <-- Make sure this line is present!
  });
}

app.get("/api/profile", authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    dob: user.dob,
    totalBooking: user.totalBooking,
    wishlist: user.wishlist,
    createdAt: user.createdAt,
  });
});

app.put("/api/profile", authenticateToken, async (req, res) => {
  try {
    const updates = (({ name, phone, address, dob }) => ({
      name,
      phone,
      address,
      dob,
    }))(req.body);
    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      dob: user.dob,
      totalBooking: user.totalBooking,
      wishlist: user.wishlist,
      createdAt: user.createdAt,
    });
  } catch (err) {
    console.error(err); // Add this for debugging!
    res.status(400).json({ error: "Failed to update profile" });
  }
});

const signinRoutes = require("./routes/signin");
app.use("/api", signinRoutes);

const userRoutes = require("./routes/user");
app.use("/api/user", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
