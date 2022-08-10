import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useHref } from "react-router-dom";

const pages = [
  { title: "Home", href: "/" },
  { title: "Products", href: "categories" },
];

export const Header = ({ handleOpen, cartItems }) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: { xs: "space-between" } }}
          >
            <Box>
              <img src="/static/images/logo.png" alt="logo" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, ind) => (
                <Button
                  key={ind}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    backgroundColor: "unset",
                  }}
                  href={page.href}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Typography>Sigin</Typography>
                <Typography>Register</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#c2c2c2",
                  position: "absolute",
                  bottom: 0,
                  borderTopRightRadius: "5px",
                  borderTopLeftRadius: "5px",
                  padding: "0.3rem 0.8rem",

                  marginLeft: { xs: "-5.5rem", sm: "-5rem", md: 0 },
                  marginBottom: { xs: "1rem", sm: "1rem", md: 0 },
                }}
                onClick={handleOpen}
              >
                <img
                  src="/static/images/cart.svg"
                  alt="logo"
                  className="logo"
                />
                <Typography>{cartItems.length} items</Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
