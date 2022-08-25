import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import Home from "pages/Home";
import Login from "pages/Login";
import PageNotFound from "pages/PageNotFound";
import Container from "@mui/material/Container";
import Register from "pages/Register";
import { total } from "utils";
import ErrorBoundary from "components/ErrorBoundaries";

const Categories = lazy(() => import("./pages/Categories"));

function App() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDec = (id) =>
    setCartItems((prev) =>
      prev.reduce((ack, cartItem) => {
        if (cartItem.id === id) {
          if (cartItem.quantity === 1) return ack;
          return [...ack, { ...cartItem, quantity: cartItem.quantity - 1 }];
        } else {
          return [...ack, cartItem];
        }
      }, [])
    );

  const handleBuy = (item) =>
    setCartItems((prev) => {
      const isItemExists = prev.find((c) => c.id === item.id);

      if (isItemExists) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : { ...c }
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

  return (
    <Container fixed>
      <Header handleOpen={handleOpen} cartItems={cartItems} />
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<h2>Fetching Categories ...</h2>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="categories"
                element={
                  <Categories
                    handleBuy={handleBuy}
                    total={total}
                    handleDec={handleDec}
                    cartItems={cartItems}
                    open={open}
                    handleClose={handleClose}
                  />
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
