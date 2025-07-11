import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState("card");
  const [upiId, setUpiId] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful! Thank you for your booking.");
    navigate("/profile");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, md: 4 },
          minWidth: 350,
          maxWidth: 500,
          borderRadius: 6,
          boxShadow: "0 8px 32px #764ba233",
          background: "linear-gradient(135deg, #fff 60%, #f3e8ff 100%)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
          <PaymentIcon color="primary" sx={{ fontSize: 36 }} />
          <Typography variant="h5" fontWeight={700}>
            Payment
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />

        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Choose Payment Method
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={method}
          exclusive
          onChange={(_, val) => val && setMethod(val)}
          fullWidth
          sx={{ mb: 3 }}
        >
          <ToggleButton value="card" sx={{ flex: 1 }}>
            <CreditCardIcon sx={{ mr: 1 }} /> Card
          </ToggleButton>
          <ToggleButton value="upi" sx={{ flex: 1 }}>
            <CurrencyRupeeIcon sx={{ mr: 1 }} /> UPI
          </ToggleButton>
          <ToggleButton value="paypal" sx={{ flex: 1 }}>
            <AccountBalanceWalletIcon sx={{ mr: 1 }} /> PayPal
          </ToggleButton>
        </ToggleButtonGroup>

        <form onSubmit={handlePayment}>
          <Grid container spacing={2}>
            {method === "card" && (
              <>
                <Grid item xs={12}>
                  <TextField
                    label="Cardholder Name"
                    name="cardName"
                    fullWidth
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Card Number"
                    name="cardNumber"
                    fullWidth
                    required
                    variant="outlined"
                    inputProps={{ maxLength: 19 }}
                    InputProps={{
                      startAdornment: (
                        <CreditCardIcon sx={{ mr: 1, color: "#764ba2" }} />
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Expiry Date"
                    name="expiry"
                    placeholder="MM/YY"
                    fullWidth
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    name="cvv"
                    type="password"
                    fullWidth
                    required
                    variant="outlined"
                    inputProps={{ maxLength: 4 }}
                  />
                </Grid>
              </>
            )}

            {method === "upi" && (
              <Grid item xs={12}>
                <TextField
                  label="Enter UPI ID"
                  name="upi"
                  fullWidth
                  required
                  variant="outlined"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="example@upi"
                />
                <Typography variant="caption" color="text.secondary">
                  You will receive a payment request in your UPI app.
                </Typography>
              </Grid>
            )}

            {method === "paypal" && (
              <Grid item xs={12}>
                <TextField
                  label="PayPal Email"
                  name="paypal"
                  type="email"
                  fullWidth
                  required
                  variant="outlined"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                  placeholder="your@email.com"
                />
                <Typography variant="caption" color="text.secondary">
                  You will be redirected to PayPal to complete the payment.
                </Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                  py: 1.5,
                  mt: 2,
                  background:
                    "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                  boxShadow: "0 2px 8px #764ba233",
                  letterSpacing: 1,
                }}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default Payment;
