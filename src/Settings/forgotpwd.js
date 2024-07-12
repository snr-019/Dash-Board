import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Box
} from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to request password reset link goes here
    alert(`Reset password link sent to ${email}`);
  };

  return (
    <Container component="main" maxWidth="sm"> {/* Adjusted maxWidth */}
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%', // Ensures the box takes full width of the container
          maxWidth: '400px', // Example of setting a specific max width
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 2 }}>
          Enter your email address and we’ll send a link to reset your password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Request Password
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Link href="#" variant="body2">
              Back to Log In
            </Link>
            <Link href="#" variant="body2">
              Register
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
