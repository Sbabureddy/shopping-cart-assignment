import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <Grid container>
      <Grid item>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            Signup
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            We do not share your personal details with anyone.
          </Typography>
        </Box>
      </Grid>
      <Grid item sx={{ width: "40vw" }}>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
          <TextField
            variant="standard"
            label="First Name"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            variant="standard"
            label="Last Name"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            variant="standard"
            label="Passwrod"
            type="password"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            variant="standard"
            label="Confirm Passwrod"
            type="password"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <Button variant="conatined">Signup</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
