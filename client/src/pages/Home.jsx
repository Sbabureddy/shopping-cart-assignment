import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { getBanners, getCategories } from "../service/categories";

const Home = () => {
  const [data, setData] = useState(null);
  const [carouselData, setCarouselData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setIsLoading(true);
        setData(res);
        setIsLoading(false);
      })
      .catch((eror) => {
        console.log(error);
        setError(error);
      });
    getBanners()
      .then((res) => setCarouselData(res))
      .catch((erro) => console.error(error));
  }, []);

  const renderCategroies = data?.map((category, ind) => {
    if (category.imageUrl) {
      return (
        <Grid item xs={12} key={category.id}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={ind % 2 === 0 ? "categories" : null}
            style={{ flexDirection: ind === 5 ? "row-reverse" : null }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {category.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {category.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ width: "100%", padding: "6px" }}
                >
                  Explore {category.key}
                </Button>
              </CardContent>
            </Box>

            <CardMedia
              component="img"
              image={category.imageUrl}
              alt={category.name}
              sx={{ height: "50%", width: "50%" }}
            />
          </Card>
        </Grid>
      );
    }
  });
  return (
    <>
      <Carousel>
        {carouselData?.map((item) => (
          <Paper key={item.id} sx={{ height: 304 }}>
            <img src={item.bannerImageUrl} alt={item.bannerImageUrlAlt} />
          </Paper>
        ))}
      </Carousel>
      {isLoading && <p>Fetching Categories...</p>}
      {error && <p>{error}</p>}
      <Grid container spaceing={3}>
        {renderCategroies}
      </Grid>
    </>
  );
};

export default Home;
