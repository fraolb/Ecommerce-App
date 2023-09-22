"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const CarouselCard = () => {
  const settings = {
    // dots: true, // Show dots for navigation
    infinite: true, // Loop the carousel
    speed: 3000, // Slide transition speed in milliseconds
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 5000, // Auto-slide interval in milliseconds (5 seconds in this example)
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: false
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
            cursor:"grab"
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
              top: "-240px", // Adjust this value as needed to position the second Box
              zIndex: 1, // Set a higher z-index to place it on top
              padding: "10px", // Add padding as desired
            }}
          >
            <Typography>{item.text}</Typography>
            <Button>Go To</Button>
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
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    id: 2,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80",
  },
  {
    id: 3,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80",
  },
];
