import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState, useEffect, Suspense } from "react";
import Banner from "components/Carousel";

import { getCategories } from "service/categories";
import { resource } from "utils";

const Home = () => {
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setIsLoading(true);
        setData(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
    return () => getCategories();
  }, []);

  const renderCategroies = data
    ?.filter((item) => item.imageUrl)
    .map((category, ind) => {
      return (
        <Grid item xs={12} key={category.id}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            style={{
              flexDirection: (ind + 1) % 2 === 0 ? "row-reverse" : "row",
            }}
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
              width="50%"
              height="50%"
              loading="lazy"
            />
          </Card>
        </Grid>
      );
    });
  return (
    <>
      <Suspense fallback={<h2>Fetching Banners...</h2>}>
        <Banner resource={resource} />
      </Suspense>
      {isLoading && <p>Fetching Categories...</p>}
      {error && <p>{error}</p>}
      <Grid container spaceing={3}>
        {renderCategroies}
      </Grid>
    </>
  );
};

export default Home;
