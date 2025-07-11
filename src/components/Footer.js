import React from "react";
import { Box, Typography, Grid, Link, Divider, Stack } from "@mui/material";

const uniqueStays = [
  ["Yurt Rentals", "United States"],
  ["Farm Houses", "United States"],
  ["Cottage Rentals", "United States"],
  ["Yurt Rentals", "United Kingdom"],
  ["Farm Cottages", "United Kingdom"],
  ["Holiday Cottages", "United Kingdom"],
  ["Castle Rentals", "United States"],
  ["Cabin Rentals", "Australia"],
  ["Mansion Rentals", "United States"],
  ["Houseboats", "United States"],
  ["Luxury Cabins", "United Kingdom"],
  ["Luxury Cabins", "United States"],
  ["Villa Rentals", "United Kingdom"],
  ["Holiday Caravans", "United Kingdom"],
  ["Holiday Bungalows", "United Kingdom"],
  ["Private Island Rentals", "United States"],
  ["Holiday Chalets", "United Kingdom"],
];

const supportLinks = [
  "Help Centre",
  "AirCover",
  "Anti-discrimination",
  "Disability support",
  "Cancellation options",
  "Report neighbourhood concern",
];

const hostingLinks = [
  "HotelBay your home",
  "AirCover for Hosts",
  "Hosting resources",
  "Community forum",
  "Hosting responsibly",
  "Join a free Hosting class",
  "Find a co-host",
];

const airbnbLinks = [
  "2025 Summer Release",
  "Newsroom",
  "New features",
  "Careers",
  "Investors",
  "HotelBay.org emergency stays",
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#fafafa", borderTop: "1px solid #eee", mt: 8 }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 2, md: 6 }, pt: 6, pb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: 18 }}>
          Inspiration for future getaways
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 700, borderBottom: "2px solid #111", fontSize: 15 }}>
            Unique stays
          </Typography>
          <Typography sx={{ color: "#888", fontSize: 15 }}>Categories</Typography>
        </Stack>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {Array.from({ length: 6 }).map((_, col) => (
            <Grid item xs={6} sm={4} md={2} key={col}>
              {uniqueStays.slice(col * 3, col * 3 + 3).map(([name, country], idx) => {
                // Show "Show more" as the last item in the last column
                if (col === 5 && idx === 2) {
                  return (
                    <Typography sx={{ fontWeight: 700, fontSize: 13, mb: 1.5 }} key="show-more">
                      Show more <span style={{ fontSize: 16 }}>▼</span>
                    </Typography>
                  );
                }
                return (
                  <Box key={name + idx} sx={{ mb: 1.2 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: 13 }}>{name}</Typography>
                    <Typography sx={{ color: "#666", fontSize: 12 }}>{country}</Typography>
                  </Box>
                );
              })}
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={4} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 14 }}>Support</Typography>
            {supportLinks.map((txt) => (
              <Typography key={txt} sx={{ color: "#555", fontSize: 13, mb: 0.5 }}>
                <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>{txt}</Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 14 }}>Hosting</Typography>
            {hostingLinks.map((txt) => (
              <Typography key={txt} sx={{ color: "#555", fontSize: 13, mb: 0.5 }}>
                <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>{txt}</Link>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ fontWeight: 700, mb: 1, fontSize: 14 }}>HotelBay</Typography>
            {airbnbLinks.map((txt) => (
              <Typography key={txt} sx={{ color: "#555", fontSize: 13, mb: 0.5 }}>
                <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>{txt}</Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            justifyContent: "space-between",
            py: 2,
            fontSize: 13,
            color: "#888",
          }}
        >
          <Box>
            © 2025 HotelBay, Inc. ·{" "}
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>Privacy</Link> ·{" "}
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>Terms</Link> ·{" "}
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>Sitemap</Link> ·{" "}
            <Link href="#" color="inherit" underline="hover" sx={{ fontSize: 13 }}>Company details</Link>
          </Box>
          <Box sx={{ mt: { xs: 2, md: 0 }, fontSize: 13 }}>
            <span role="img" aria-label="globe">🌐</span> English (IN) &nbsp; ₹ INR &nbsp;
            <Link href="#" color="inherit" underline="none" sx={{ mx: 1, fontSize: 13 }}>ⓕ</Link>
            <Link href="#" color="inherit" underline="none" sx={{ mx: 1, fontSize: 13 }}>ⓧ</Link>
            <Link href="#" color="inherit" underline="none" sx={{ mx: 1, fontSize: 13 }}>ⓘ</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}