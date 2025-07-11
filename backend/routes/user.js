const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const auth = require('../middleware/auth'); // JWT middleware

// Toggle favorite hotel
router.post('/favorite', auth, async (req, res) => {
  const { hotelId } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  const idx = user.favorites.indexOf(hotelId);
  if (idx === -1) {
    user.favorites.push(hotelId);
  } else {
    user.favorites.splice(idx, 1);
  }
  await user.save();
  res.json(user.favorites);
});

// Get user's favorite hotels
// router.get('/favorites', auth, async (req, res) => {
//   const user = await User.findById(req.user.id);
//   res.json(user.favorites);
// });

// Get user profile
router.get('/profile', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

module.exports = router;