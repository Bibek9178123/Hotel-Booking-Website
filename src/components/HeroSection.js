import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";

function HeroSection() {
  // Scroll handler for the mouse icon
  const handleScroll = () => {
    const articleSection = document.getElementById("article-section");
    if (articleSection) {
      articleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        p: -1,
        m: -1,
        background: "transparent",
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 10,
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="/4788-180289892.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      {/* <Avatar
        sx={{
          width: 90,
          height: 90,
          mb: 2,
          bgcolor: "rgba(102,126,234,0.15)",
          boxShadow: "0 0 60px 20px #a259ff55, 0 0 0 8px #fff1",
          zIndex: 1,
        }}
      >
        <HotelIcon sx={{ fontSize: 60, color: "#a259ff" }} />
      </Avatar> */}
      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
          color: "#fff",
          textShadow: "0 4px 32px #a259ff55",
          mb: 2,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        Accelerate Your Booking
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#c7c7ff",
          mb: 4,
          textAlign: "center",
          maxWidth: 600,
          zIndex: 1,
        }}
      >
        Discover, compare, and book the best hotels with a seamless, modern
        experience.
      </Typography>
      <Paper
        elevation={0}
        sx={{
          mt: 2,
          px: 4,
          py: 3,
          borderRadius: 4,
          background: "rgba(40, 40, 60, 0.4)",
          boxShadow: "0 8px 32px 0 #a259ff44, 0 1.5px 8px 0 #fff1",
          backdropFilter: "blur(8px)",
          color: "#fff",
          maxWidth: 420,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 18 }}>
          <b>✨ New:</b> Enjoy a personalized booking journey with real-time
          availability, glowing reviews, and instant confirmation.
        </Typography>
      </Paper>
      {/* Glowing background effect */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "80%",
          width: 400,
          height: 200,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #a259ff55 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Scroll Mouse Icon */}
      <Box
        onClick={handleScroll}
        sx={{
          position: "absolute",
          left: "50%",
          bottom: 32,
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          opacity: 0.9,
          animation: "bounce 2s infinite",
          userSelect: "none",
        }}
      >
        {/* Mouse SVG */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect
            x="14"
            y="8"
            width="20"
            height="32"
            rx="10"
            stroke="#fff"
            strokeWidth="3"
          />
          <rect x="22" y="14" width="4" height="8" rx="2" fill="#fff" />
        </svg>
        {/* Down Arrow */}
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
          <path
            d="M8 8L16 16L24 8"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      {/* Bounce animation */}
      <style>
        {`
          @keyframes bounce {
            1%,
            100% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(12px);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default HeroSection;
