import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { getBanners } from "../../service/categories";

const Banner = () => {
  const [carouselData, setCarouselData] = useState(null);
  useEffect(() => {
    getBanners()
      .then((res) => setCarouselData(res))
      .catch((error) => console.error(error));
  });
  return (
    <Carousel>
      {carouselData?.map((item) => (
        <Paper key={item.id} sx={{ height: 304 }}>
          <img
            src={item.bannerImageUrl}
            alt={item.bannerImageAlt}
            className="img"
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default Banner;
