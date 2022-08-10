import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Grid,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, forwardRef } from "react";
import { getProducts } from "../../service/categories";
import "./categories.css";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import CartItems from "../../components/CartItems/CartItems";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Layout = ({
  handleBuy,
  handleDec,
  total,
  cartItems,
  open,
  handleClose,
}) => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setIsLoading(true);
        setData(res);
        setIsLoading(false);
      })
      .catch((eror) => {
        console.log(error);
        setError(error);
      });
  }, []);

  const renderCategroies = data?.map((category) => (
    <Grid item xs={12} sm={6} md={4} key={category.id} component={Card}>
      <CardHeader title={category.name} sx={{ height: "10rem" }} />
      <Box sx={{ display: { xs: "flex", sm: "flex", md: "block" } }}>
        <CardMedia
          component="img"
          image={category.imageURL}
          alt={category.name}
          sx={{
            height: { xs: "unset", sm: "226px", md: "226px" },
            width: { xs: "50%", sm: "50%", md: "100%" },
          }}
        />

        <CardContent>
          <Typography
            variant="body2"
            color="text.secodary"
            sx={{
              height: { xs: "unset", sm: "226px", md: "60px" },
              overflow: "hidden",
              backgroundColor: "#c2c2c2",
            }}
          >
            {category.description}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            backgroundColor: "unset",
            color: "black",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          MRP Rs. {category.price}
        </Button>
        <Button
          size="small"
          color="primary"
          sx={{
            color: "black",
            display: { xs: "none", sm: "none", md: "block" },
          }}
          onClick={(categroy) => handleBuy(category)}
        >
          Buy Now
        </Button>
        <Button
          size="small"
          color="primary"
          sx={{
            color: "black",
            display: { xs: "100%", sm: "100%", md: "none" },
            width: "100%",
          }}
          onClick={(categroy) => handleBuy(category)}
        >
          Buy Now &copy; {category.price}
        </Button>
      </CardActions>
    </Grid>
  ));
  return (
    <>
      {isLoading && <p>Fetching Categories...</p>}
      {error && <p>{error}</p>}
      <Grid container spaceing={3}>
        {renderCategroies}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar sx={{ backgroundColor: "#000", color: "#fff" }}>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Cart
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {cartItems.length === 0 && (
          <>
            <Box className="cart-empty">
              <Typography>No Items in your cart</Typography>

              <Typography>
                Your favourite items are just a click away
              </Typography>
            </Box>
            <div className="center">
              <Button className="btn fullwidth">Start Shopping</Button>
            </div>
          </>
        )}
        <Grid container>
          <CartItems
            cartItems={cartItems}
            handleDec={handleDec}
            handleInc={handleBuy}
          />
        </Grid>
        {cartItems.length > 0 && (
          <>
            <Grid container>
              <Grid item className="fullwidth" mt={2}>
                <Card className="flex">
                  <CardMedia
                    component="img"
                    image="/static/images/lowest-price.png"
                    alt="Lowest Price Logo"
                    className="width-25"
                  />
                  <CardContent>You won't find it cheaper anywhere.</CardContent>
                </Card>
              </Grid>
            </Grid>
            <Card className="bottom">
              <div className="center">
                <Button
                  sx={{
                    width: "100%",
                    color: "white",
                    textTransform: "unset",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="btn fullwidth"
                  endIcon={<ChevronRightIcon />}
                >
                  <Box sx={{ marginRight: "auto", width: "50%" }}>
                    Proceed to Checkout{" "}
                  </Box>
                  <Box>{total(cartItems)}</Box>
                </Button>
              </div>
            </Card>
          </>
        )}
      </Dialog>
    </>
  );
};
