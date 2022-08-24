import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Login = () => {
  return (
    <Grid container>
      <Grid item>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            Login
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Get access to your Orders, Whishlist and Recomendations.
          </Typography>
        </Box>
      </Grid>
      <Grid item sx={{ width: "40vw" }}>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
          <TextField
            variant="standard"
            label="email"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            variant="standard"
            label="passwrod"
            type="password"
            fullWidth
            sx={{ marginBottom: "1rem" }}
          />
          <Button variant="conatined">Login</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
