import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Tooltip,
  LinearProgress,
  Divider,
  Stack,
  Paper,
  IconButton,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import BookingModal from "../components/BookingModal";
import Footer from "../components/Footer";
import HotelIcon from "@mui/icons-material/Hotel";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const articles = [
  {
    title: "Why Book With Us?",
    content:
      "We offer real-time availability, instant confirmation, and the best prices. Our AI-powered platform ensures you always get the best deal.",
    icon: <EmojiEventsIcon sx={{ color: "#a259ff" }} />,
    chip: "Best Value",
  },
  {
    title: "Top Rated Hotels",
    content:
      "Browse our curated list of top-rated hotels, complete with glowing reviews and exclusive offers for members.",
    icon: <StarIcon sx={{ color: "#ffd700" }} />,
    chip: "Top Picks",
  },
  {
    title: "Personalized Recommendations",
    content:
      "Get suggestions tailored to your preferences and booking history. Discover hidden gems and trending destinations.",
    icon: <HotelIcon sx={{ color: "#2196f3" }} />,
    chip: "For You",
  },
];

const trendingDestinations = [
  {
    name: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tokyo",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "New York",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dubai",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "India",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Australia",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "China",
    img: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Singapore",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
  },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function Home() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [greeting, setGreeting] = useState(getGreeting());
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setGreeting(getGreeting()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => (old >= 100 ? 0 : old + Math.random() * 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  // Theme setup
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(darkMode && {
        background: {
          default: "#181a20",
          paper: "#232634",
        },
        text: {
          primary: "#fff",
          secondary: "#c7c7ff",
        },
      }),
    },
  });

  // For navigation
  const navigateToHotels = () => {
    window.location.href = "/hotels";
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* NavBar without toggle button */}
        <NavBar />
        <HeroSection />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box
            id="article-section"
            sx={{
              minHeight: "100vh",
              background: "linear-gradient(135deg, #f5f6fa 60%, #e0e7ff 100%)",
              borderRadius: 6,
              boxShadow: "0 8px 32px #a259ff11",
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 8 },
              mt: -8,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: "#4b2995",
                textAlign: "center",
                letterSpacing: 1,
              }}
            >
              {greeting}, Welcome to Hotel Booking Platform!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#555",
                mb: 5,
                textAlign: "center",
                maxWidth: 700,
              }}
            >
              Discover trending hotels, get personalized recommendations, and
              enjoy exclusive deals. Explore our interactive features below!
            </Typography>

            {/* Trending Destinations */}
            <Box sx={{ width: "100%", mb: 6, overflowX: "auto" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2, color: "#4b2995" }}
              >
                <TrendingUpIcon sx={{ mb: "-4px", mr: 1 }} />
                Trending Destinations
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  pb: 1,
                  minHeight: 150,
                  width: "max-content",
                }}
              >
                {trendingDestinations.map((dest) => (
                  <Paper
                    key={dest.name}
                    elevation={3}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.06)" },
                      cursor: "pointer",
                      minWidth: 160,
                      maxWidth: 180,
                      flex: "0 0 auto",
                    }}
                  >
                    <img
                      src={dest.img}
                      alt={dest.name}
                      style={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                        background: "#e0e7ff",
                        display: "block",
                      }}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/160x100?text=" +
                          encodeURIComponent(dest.name);
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#4b2995",
                        textAlign: "center",
                        py: 1,
                        bgcolor: "#fff",
                      }}
                    >
                      {dest.name}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>

            {/* Interactive Articles */}
            <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
              {articles.map((article, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: "0 4px 24px #a259ff22",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 32px #a259ff44",
                      },
                      background: "#fff",
                      minHeight: 260,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Tooltip title={article.chip} arrow>
                      <Chip
                        label={article.chip}
                        color="secondary"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 18,
                          right: 18,
                          bgcolor: "#a259ff",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: 12,
                          letterSpacing: 1,
                        }}
                      />
                    </Tooltip>
                    <Avatar
                      sx={{
                        bgcolor: "#f3e8ff",
                        width: 64,
                        height: 64,
                        mt: 3,
                        mb: 2,
                      }}
                    >
                      {article.icon}
                    </Avatar>
                    <CardContent>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, color: "#4b2995" }}
                      >
                        {article.title}
                      </Typography>
                      <Typography sx={{ color: "#555", mb: 2 }}>
                        {article.content}
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: 2,
                          color: "#a259ff",
                          borderColor: "#a259ff",
                          fontWeight: 700,
                          "&:hover": {
                            bgcolor: "#a259ff11",
                            borderColor: "#a259ff",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Live Site Stats */}
            <Box
              sx={{ mt: 4, width: "100%", maxWidth: 900, textAlign: "center" }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2, color: "#4b2995" }}
              >
                <PeopleAltIcon sx={{ mb: "-4px", mr: 1 }} />
                Live Site Stats
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ color: "#a259ff", fontWeight: 800 }}
                    >
                      +{Math.floor(1000 + progress * 90)}
                    </Typography>
                    <Typography sx={{ color: "#555" }}>
                      Bookings Today
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        mt: 2,
                        height: 8,
                        borderRadius: 5,
                        bgcolor: "#f3e8ff",
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ color: "#2196f3", fontWeight: 800 }}
                    >
                      +{Math.floor(100 + progress * 4)}
                    </Typography>
                    <Typography sx={{ color: "#555" }}>
                      Hotels Listed
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        mt: 2,
                        height: 8,
                        borderRadius: 5,
                        bgcolor: "#e3f2fd",
                      }}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{ color: "#ffd700", fontWeight: 800 }}
                    >
                      {(4.5 + (progress / 100) * 0.5).toFixed(1)}★
                    </Typography>
                    <Typography sx={{ color: "#555" }}>
                      Avg. User Rating
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        mt: 2,
                        height: 8,
                        borderRadius: 5,
                        bgcolor: "#fffde7",
                      }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            {/* Divider and About Section */}
            <Divider sx={{ my: 6, width: "100%" }} />
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "#4b2995", mb: 1 }}
                >
                  About Our Platform
                </Typography>
                <Typography sx={{ color: "#555", maxWidth: 500, mb: 3 }}>
                  Our platform connects travelers with a handpicked selection of
                  hotels, ensuring a seamless and personalized booking
                  experience. Enjoy exclusive member rates, 24/7 customer
                  support, and a commitment to quality and satisfaction.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#4b2995",
                    color: "#fff",
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    "&:hover": {
                      bgcolor: "#3f2468",
                    },
                  }}
                  onClick={navigateToHotels}
                >
                  Explore Hotels
                </Button>
              </Box>
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=500&q=80"
                alt="About Our Platform"
                style={{
                  borderRadius: 7,
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                  objectFit: "cover",
                  boxShadow: "0 4px 24px #a259ff22",
                }}
                loading="lazy"
              />
            </Stack>
          </Box>
        </Container>
        <BookingModal
          hotel={selectedHotel}
          open={!!selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Home;
