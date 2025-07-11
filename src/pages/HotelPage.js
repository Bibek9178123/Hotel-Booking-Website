import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NavBar from "../components/NavBar";
import HotelSearchBar from "../components/HotelSearchBar";
import { Link } from "react-router-dom";
import hotelsData from "../data/hotelsData";
import Footer from "../components/Footer";

const hotelsPuri = [
  {
    id: 1,
    title: "Apartment in Puri",
    price: "₹4,337 for 2 nights",
    rating: 5.0,
    img: "https://a0.muscache.com/im/pictures/2eb56fcb-2258-4cf4-b4ec-f3554bd0aec0.jpg?im_w=1200",
    tag: "Guest favourite",
  },
  {
    id: 2,
    title: "Apartment in Puri",
    price: "₹3,492 for 2 nights",
    rating: 4.85,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 3,
    title: "Apartment in Puri",
    price: "₹2,968 for 2 nights",
    rating: 4.93,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 4,
    title: "Flat in Puri",
    price: "₹6,905 for 2 nights",
    rating: 4.89,
    img: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 5,
    title: "Apartment in Puri",
    price: "₹9,586 for 2 nights",
    rating: 4.85,
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 6,
    title: "Apartment in Puri",
    price: "₹7,989 for 2 nights",
    rating: 4.95,
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 7,
    title: "Home in Puri",
    price: "₹3,734 for 2 nights",
    rating: 4.81,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
];

const hotelsBengaluru = [
  {
    id: 8,
    title: "Flat in Koramangala",
    price: "₹7,076 for 2 nights",
    rating: 4.93,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 9,
    title: "Flat in Bengaluru",
    price: "₹3,652 for 2 nights",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 10,
    title: "Apartment in Bengaluru",
    price: "₹8,998 for 2 nights",
    rating: 4.88,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 11,
    title: "Flat in Bengaluru",
    price: "₹5,250 for 2 nights",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 12,
    title: "Flat in Jeevan Bhima Nagar",
    price: "₹3,424 for 2 nights",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 13,
    title: "Flat in Domlur",
    price: "₹18,490 for 2 nights",
    rating: 4.88,
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 14,
    title: "Room in BTM Layout",
    price: "₹3,880 for 2 nights",
    rating: 4.92,
    img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
];

const hotelsKolkata = [
  {
    id: 15,
    title: "Apartment in Kolkata",
    price: "₹5,200 for 2 nights",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 16,
    title: "Flat in Salt Lake",
    price: "₹4,800 for 2 nights",
    rating: 4.85,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 17,
    title: "Home in New Town",
    price: "₹6,100 for 2 nights",
    rating: 4.95,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 18,
    title: "Studio in Park Street",
    price: "₹3,900 for 2 nights",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  // Add more hotels for scroll
  {
    id: 19,
    title: "Luxury Suite in Ballygunge",
    price: "₹7,500 for 2 nights",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 20,
    title: "Penthouse in Alipore",
    price: "₹8,200 for 2 nights",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
];

const hotelsBhubaneswar = [
  {
    id: 21,
    title: "Apartment in Bhubaneswar",
    price: "₹4,800 for 2 nights",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 22,
    title: "Flat in Nayapalli",
    price: "₹5,200 for 2 nights",
    rating: 4.85,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 23,
    title: "Home in Patia",
    price: "₹6,100 for 2 nights",
    rating: 4.95,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 24,
    title: "Studio in Khandagiri",
    price: "₹3,900 for 2 nights",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 25,
    title: "Studio in Khandagiri",
    price: "₹3,900 for 2 nights",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
];

const hotelsHyderabad = [
  {
    id: 26,
    title: "Apartment in Hyderabad",
    price: "₹6,000 for 2 nights",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 27,
    title: "Flat in Banjara Hills",
    price: "₹5,800 for 2 nights",
    rating: 4.85,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 28,
    title: "Home in Gachibowli",
    price: "₹7,200 for 2 nights",
    rating: 4.95,
    img: "https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 29,
    title: "Studio in Hitech City",
    price: "₹4,500 for 2 nights",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 30,
    title: "Flat in Kukatpally",
    price: "₹5,500 for 2 nights",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
  {
    id: 31,
    title: "Apartment in Madhapur",
    price: "₹6,800 for 2 nights",
    rating: 4.95,
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
    tag: "Guest favourite",
  },
];

// Combine all hotels into one array
const allHotels = [
  ...hotelsPuri.map((h) => ({ ...h, city: "Popular Hotels in Puri >" })),
  ...hotelsBengaluru.map((h) => ({
    ...h,
    city: "Popular Hotels in Bengaluru >",
  })),
  ...hotelsKolkata.map((h) => ({ ...h, city: "Popular Hotels in Kolkata >" })),
  ...hotelsBhubaneswar.map((h) => ({
    ...h,
    city: "Popular Hotels in Bhubaneswar >",
  })),
  ...hotelsHyderabad.map((h) => ({
    ...h,
    city: "Popular Hotels in Hyderabad >",
  })),
];

// Helper: group hotels by city
function groupByCity(hotels) {
  return hotels.reduce((acc, hotel) => {
    acc[hotel.city] = acc[hotel.city] || [];
    acc[hotel.city].push(hotel);
    return acc;
  }, {});
}

function HotelPage({ favorites = [], onToggleFavorite, user }) {
  const [search, setSearch] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });
  const [filteredHotels, setFilteredHotels] = useState(allHotels);

  const handleSearch = () => {
    setFilteredHotels(
      allHotels.filter((hotel) => {
        const matchesDestination =
          !search.destination ||
          hotel.city.toLowerCase().includes(search.destination.toLowerCase()) ||
          hotel.title.toLowerCase().includes(search.destination.toLowerCase());
        // Add more filters if needed
        return matchesDestination;
      })
    );
  };

  // Group filtered hotels by city
  const hotelsByCity = groupByCity(filteredHotels);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <Box sx={{ flex: 1, p: { xs: 2, md: 6 }, mt: 0 }}>
        <HotelSearchBar
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        />
        <Box sx={{ mt: 4 }}>
          {Object.keys(hotelsByCity).length === 0 ? (
            <Box>No hotels found.</Box>
          ) : (
            Object.entries(hotelsByCity).map(([city, hotels]) => (
              <Box key={city} sx={{ mb: 5 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                  {city}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    overflowX: "auto",
                    gap: 3,
                    pb: 2,
                    "&::-webkit-scrollbar": { height: 8 },
                    "&::-webkit-scrollbar-thumb": {
                      bgcolor: "#eee",
                      borderRadius: 4,
                    },
                  }}
                >
                  {hotels.map((hotel, idx) => (
                    <Box
                      key={idx}
                      sx={{ minWidth: 320, maxWidth: 340, flex: "0 0 auto" }}
                    >
                      <Link
                        to={`/hotels/${hotel.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Card
                          sx={{
                            borderRadius: 4,
                            boxShadow: 3,
                            position: "relative",
                            cursor: "pointer",
                          }}
                        >
                          <Box sx={{ position: "relative" }}>
                            <CardMedia
                              component="img"
                              height="160"
                              image={hotel.img}
                              alt={hotel.title}
                              sx={{ borderRadius: 3 }}
                            />
                            <Chip
                              label={hotel.tag}
                              sx={{
                                position: "absolute",
                                top: 12,
                                left: 12,
                                bgcolor: "#fff",
                                color: "#333",
                                fontWeight: 700,
                                fontSize: 13,
                              }}
                            />
                            <IconButton
                              onClick={(e) => {
                                e.preventDefault(); // Prevents navigating to hotel details
                                onToggleFavorite(hotel.id);
                              }}
                              sx={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                bgcolor: "#fff",
                                "&:hover": { bgcolor: "#f3e8ff" },
                              }}
                            >
                              <FavoriteBorderIcon
                                sx={{
                                  color: favorites.includes(hotel.id)
                                    ? "red"
                                    : "#764ba2",
                                  transition: "color 0.2s",
                                }}
                              />
                            </IconButton>
                          </Box>
                          <CardContent sx={{ pb: "16px!important" }}>
                            <Typography sx={{ fontWeight: 700 }}>
                              {hotel.title}
                            </Typography>
                            <Typography sx={{ color: "#555", fontSize: 14 }}>
                              {hotel.price} &nbsp; • &nbsp; ★ {hotel.rating}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default HotelPage;

