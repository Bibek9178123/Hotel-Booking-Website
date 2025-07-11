import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Alert,
  Typography,
  Paper,
  TextField,
  Divider,
  InputAdornment,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

function SignIn({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const googleBtn = useRef(null);
  const navigate = useNavigate();

  // Google Sign-In callback
  const handleGoogleResponse = async (response) => {
    const res = await fetch("http://localhost:5000/api/google-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: response.credential }),
    });
    const data = await res.json();
    if (data.token) {
      setUser({ token: data.token, ...data.user });
      localStorage.setItem(
        "user",
        JSON.stringify({ token: data.token, ...data.user })
      );
      setSuccess(true);
      // Notify other components
      window.dispatchEvent(new Event("login"));
      setTimeout(() => navigate("/"), 1500);
    }
  };

  // Initialize Google Sign-In button
  useEffect(() => {
    if (window.google && googleBtn.current) {
      window.google.accounts.id.initialize({
        client_id:
          "778536674202-moicfs49lhn173usmupmge0hg7lukn5e.apps.googleusercontent.com", // <-- Replace with your client ID
        callback: handleGoogleResponse,
      });
      window.google.accounts.id.renderButton(googleBtn.current, {
        theme: "outline",
        size: "large",
        width: "100%",
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const res = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.message && data.token) {
        setSuccess(true);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({ token: data.token, ...data.userData })
        );
        setUser({ token: data.token, ...data.userData });
        // Notify other components
        window.dispatchEvent(new Event("login"));
        setTimeout(() => navigate("/"), 1500);
      } else if (data.error) {
        alert(data.error);
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: { xs: 2, md: 4 },
          minWidth: 350,
          maxWidth: 400,
          borderRadius: 4,
          bgcolor: "#181c24",
          color: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Sign in
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 3, color: "#b0b3b8" }}
        >
          Welcome user, please sign in to continue
        </Typography>

        <Divider sx={{ my: 2, color: "#444" }}>Or</Divider>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              mb: 2,
              input: { color: "#fff" },
              label: { color: "#b0b3b8" },
              bgcolor: "#23272f",
              borderRadius: 2,
            }}
            InputProps={{
              style: { background: "#23272f" },
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 3,
              input: { color: "#fff" },
              label: { color: "#b0b3b8" },
              bgcolor: "#23272f",
              borderRadius: 2,
            }}
            InputProps={{
              style: { background: "#23272f" },
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    size="small"
                    sx={{
                      bgcolor: "#23272f",
                      color: "#fff",
                      borderRadius: 2,
                      px: 2,
                      fontWeight: 600,
                      fontSize: 16,
                      boxShadow: "none",
                      "&:hover": { bgcolor: "#333" },
                    }}
                  ></Button>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: 700,
              fontSize: 18,
              py: 1.5,
              mt: 2,
              borderRadius: 3,
              background: "linear-gradient(90deg, #764ba2 0%, #a259c7 100%)",
              boxShadow: "0 2px 8px #764ba233",
              letterSpacing: 1,
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #a259c7 0%, #764ba2 100%)",
              },
            }}
          >
            Sign In
          </Button>
        </form>
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Signed in successfully!
          </Alert>
        )}
        <Box
          ref={googleBtn}
          sx={{ mt: 2, mb: 2, display: "flex", justifyContent: "center" }}
        />
      </Paper>
    </Box>
  );
}

export default SignIn;
