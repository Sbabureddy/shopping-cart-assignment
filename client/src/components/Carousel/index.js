import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Banner = ({ resource }) => {
  const carouselData = resource.banners.read();
  return (
    <Carousel>
      {carouselData?.map(({ id, bannerImageAlt, bannerImageUrl }) => (
        <Paper key={id} sx={{ height: 304 }}>
          <img src={bannerImageUrl} alt={bannerImageAlt} className="img" />
        </Paper>
      ))}
    </Carousel>
  );
};

export default Banner;
