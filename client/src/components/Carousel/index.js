import React, { memo } from "react";
import Paper from "@mui/material/Paper";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Banner = ({ resource }) => {
  const carouselData = resource.banners.read();
  return (
    <Carousel
      className="carousel"
      IndicatorIcon={
        <FiberManualRecordIcon size="large" sx={{ fontSize: "48px" }} />
      }
    >
      {carouselData?.map(({ id, bannerImageAlt, bannerImageUrl }, ind) => (
        <Paper key={id} sx={{ height: 304 }}>
          <img
            src={bannerImageUrl}
            alt={bannerImageAlt}
            className="img"
            fetchpriority={ind === 0 ? "high" : "low"}
          />
        </Paper>
      ))}
    </Carousel>
  );
};

export default memo(Banner);
