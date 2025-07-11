import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";
import Switch from "@mui/material/Switch";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

function NavBar({ darkMode = false, onToggleTheme = () => {} }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const checkLogin = () =>
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    checkLogin();

    window.addEventListener("storage", checkLogin);
    window.addEventListener("login", checkLogin); // Listen for custom login event
    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("login", checkLogin);
    };
  }, []);

  // Dropdown menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        background: "transparent",
        color: "#4b2995",
        boxShadow: "0 4px 24px 0 #0003",
        borderRadius: 0,
        m: 0,
        px: 0,
        width: "100vw",
        left: 0,
        top: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: 70,
          px: { xs: 2, sm: 6 },
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
          <img
            src="/hotelbay-logo.png"
            alt="HotelBay Logo"
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              objectFit: "cover",
              background: "#fff",
              boxShadow: "0 2px 8px #764ba255",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            flexGrow: 1, // This pushes the buttons to the right!
            letterSpacing: 2,
            color: "#4b2995",
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
          }}
        >
          HotelBay
        </Typography>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap", // Allow wrapping on small screens
          }}
        >
          <Button
            color="inherit"
            sx={{
              fontWeight: 700,
              px: 3,
              borderRadius: 2,
              bgcolor: "rgba(255,255,255,0.08)",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.18)",
              },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            color="inherit"
            sx={{
              fontWeight: 700,
              px: 3,
              borderRadius: 2,
              bgcolor: "rgba(255,255,255,0.08)",
              transition: "background 0.2s",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.18)",
              },
            }}
            onClick={() => navigate("/hotels")}
          >
            Hotels
          </Button>
          {!isLoggedIn && (
            <>
              <Button
                variant="outlined"
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  borderColor: "#764ba2",
                  color: "#764ba2",
                  px: 2,
                  ml: 1,
                  "&:hover": {
                    bgcolor: "#f3e8ff",
                    borderColor: "#764ba2",
                  },
                }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  bgcolor: "#764ba2",
                  color: "#fff",
                  px: 2,
                  ml: 1,
                  "&:hover": {
                    bgcolor: "#4b2995",
                  },
                }}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </Button>
            </>
          )}
        </Box>

        {/* Profile Dropdown */}
        {isLoggedIn && (
          <Box sx={{ display: "flex", alignItems: "center", ml: 3, gap: 1 }}>
            <IconButton
              onClick={handleMenuOpen}
              sx={{
                bgcolor: "#fff",
                color: "#764ba2",
                width: 40,
                height: 40,
                fontWeight: 700,
                fontSize: 18,
                boxShadow: "0 2px 8px #764ba255",
                cursor: "pointer",
                ml: 1,
                "&:hover": { bgcolor: "#f3e8ff" },
              }}
            >
              <Avatar
                alt="User Avatar"
                src="/user-avatar.png"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/profile");
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  localStorage.removeItem("token");
                  setIsLoggedIn(false);
                  handleMenuClose();
                  navigate("/signin");
                  window.location.reload();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
