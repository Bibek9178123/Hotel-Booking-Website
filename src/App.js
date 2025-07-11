import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import HotelDetails from "./pages/HotelDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./pages/Profile";
import BookingHotel from "./pages/BookingHotel";
import Payment from "./pages/Payment";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const handleToggleTheme = () => setDarkMode((prev) => !prev);

  const handleToggleFavorite = async (hotelId) => {
    if (!user) {
      return;
    }
    const res = await fetch("http://localhost:5000/api/user/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ hotelId }),
    });
    const updatedFavorites = await res.json();
    setFavorites(updatedFavorites);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    if (user) {
      fetch("/api/user/favorites", {
        headers: { Authorization: `Bearer ${user.token}` },
      })
        .then((res) => res.json())
        .then(setFavorites);
    }
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar darkMode={darkMode} onToggleTheme={handleToggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/hotels"
            element={
              <HotelPage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                user={user}
              />
            }
          />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking/:id" element={<BookingHotel />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// const userRoutes = require('./routes/user');
// app.use('/api', userRoutes);

// const data = await fetch("http://localhost:3000/api/signin").then((res) => res.json());

// if (data.token) {
//   setSuccess(true);
//   setTimeout(() => navigate("/profile"), 1500);
// }


