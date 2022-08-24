import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const CartItems = ({ cartItems, handleDec, handleInc }) => {
  return (
    <>
      {[...new Set(cartItems)]?.map((cart) => (
        <Grid item xs={12} sm={12} md={12} key={cart.id}>
          <Card>
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={cart.imageURL}
                alt={cart.name}
                sx={{ width: "15%" }}
                width="100%"
                height="100%"
                loading="lazy"
              />
              <Box>
                <CardHeader title={cart.name} className="cart-header" />
                <div className="cart-btn-container">
                  <Button
                    variant="outlined"
                    onClick={() => handleDec(cart.id)}
                    className="cart-btn"
                    disableElevation
                  >
                    -
                  </Button>
                  <p className="cart-value">{cart.quantity}</p>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      handleInc(cart);
                    }}
                    className="cart-btn"
                  >
                    +
                  </Button>{" "}
                  &times; {cart.price}
                </div>
              </Box>
              <Box className="price-information" sx={{ left: "5rem" }}>
                {(cart.price * cart.quantity).toFixed(2)}
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default CartItems;
