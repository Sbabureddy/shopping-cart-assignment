import { Button, Card, CardHeader, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";

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
