"use client";

import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const CarouselImg = ({ images, alt }) => {
  const settings = {
    // dots: true, // Show dots for navigation
    infinite: true, // Loop the carousel
    speed: 3000, // Slide transition speed in milliseconds
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 5000, // Auto-slide interval in milliseconds (5 seconds in this example)
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false,
  };
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <Slider {...settings}>
      { images.map((item) => (
        <Box
          sx={{
            // border: "solid",
            height: {
              xs: "280px",
              md: "340px",
              lg: "440px",
            },
            cursor: "grab",
          }}
          key={item}
        >
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "280px",
                md: "340px",
                lg: "440px",
              },
              position: "relative",
              borderRadius: "10px",
              opacity: "1",
              objectFit: "cover",
            }}
          >
            {/* <Image src={item} fill={true} alt={alt} /> */}
            {item}
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselImg;
