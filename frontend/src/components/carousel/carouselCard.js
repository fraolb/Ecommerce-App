"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CldImage } from "next-cloudinary";
import FraolImg from "../../Files/imgFraol.png";
import GabiImg from "../../Files/Asna.png";

const CarouselCard = () => {
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
  return (
    <Slider {...settings}>
      {responsive.map((item) => (
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
          key={item.id}
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
            <Image
              src={item.imageUrl}
              fill={true}
              alt="addis couture product"
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              top: "-270px", // Adjust this value as needed to position the second Box
              zIndex: 1, // Set a higher z-index to place it on top
              padding: "10px", // Add padding as desired
              width: "60%",
              // border: "solid",
            }}
          >
            <Typography  color={'textColor1.main'} sx={{fontSize:{xs:'20px', sm:"25px"}}}>{item.text}</Typography>
            {/* <Typography variant="h5">{item.title}</Typography> */}
            <Button variant="contained" sx={{mt:2}} endIcon={<ArrowRightAltIcon />}>Go To</Button>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselCard;

const responsive = [
  {
    id: 1,
    title: "Fraol Bereket (Website Developer)",
    text: "If you want an Ecommerce website that has a smooth look and responsive design contact me",
    imageUrl: FraolImg,
  },
  {
    id: 2,
    title: "Fraol Bereket (Website Developer)",
    text: "If you want an Ecommerce website that has a smooth look and responsive design contact me",
    imageUrl: GabiImg,
  },
  {
    id: 3,
    title: "Fraol Bereket (Website Developer)",
    text: "If you want an Ecommerce website that has a smooth look and responsive design contact me",
    imageUrl: FraolImg,
  },
];
