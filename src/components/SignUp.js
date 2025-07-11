import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Divider,
  Avatar,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (data.message) {
        setOpen(true); // Show custom alert
        setTimeout(() => navigate("/signin"), 1500); // Redirect after 1.5s
      } else if (data.error) {
        alert(data.error);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 3,
          minWidth: 300,
          maxWidth: 650,
          borderRadius: 3,
          boxShadow: "0 4px 16px 0 #764ba255",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar
          sx={{
            bgcolor: "#764ba2",
            width: 44,
            height: 44,
            mb: 1.5,
            boxShadow: "0 2px 8px #764ba255",
          }}
        > */}
        {/* <PersonAddAlt1RoundedIcon sx={{ fontSize: 24 }} />
        </Avatar> */}
        <Typography variant="h5" fontWeight={800} mb={1} color="#764ba2">
          Create Account
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Join HotelBay to book your dream stay!
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Full Name"
            fullWidth
            required
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonAddAlt1RoundedIcon color="action" />
                </InputAdornment>
              ),
            }}
            size="small"
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRoundedIcon color="action" />
                </InputAdornment>
              ),
            }}
            size="small"
          />
          <TextField
            label="Password"
            type={showPass ? "text" : "password"}
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRoundedIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPass((show) => !show)}
                    edge="end"
                    size="small"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#764ba2",
              fontWeight: 700,
              fontSize: 15,
              py: 1,
              borderRadius: 2,
              boxShadow: "0 2px 8px #764ba255",
              letterSpacing: 1,
            }}
          >
            Sign Up
          </Button>
        </form>
        <Divider sx={{ my: 2, width: "100%" }}>or</Divider>
        {/* <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            borderColor: "#764ba2",
            color: "#764ba2",
            fontWeight: 700,
            mb: 1,
            py: 1,
            borderRadius: 2,
            fontSize: 14,
            "&:hover": {
              bgcolor: "#f3e8ff",
              borderColor: "#764ba2",
            },
          }}
        >
          Sign Up with Google
        </Button> */}
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          Already have an account?{" "}
          <Button
            variant="text"
            sx={{
              color: "#764ba2",
              fontWeight: 700,
              textTransform: "none",
              p: 0,
              minWidth: 0,
              fontSize: 14,
            }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
        </Typography>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: "64px" }} // Adjust '64px' to your navbar's height
      >
        <MuiAlert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Sign up successful!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}

export default SignUp;
