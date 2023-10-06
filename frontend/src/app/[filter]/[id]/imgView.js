"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

const ImgView = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <Box sx={{p:'5%', }}>
      <Box sx={{
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
              mb:'15px'
            }}> 
            {
              images !== undefined && <Image src={selectedImg} fill={true}  alt="img" />
            }
        
      </Box>
      <Box>
        {images !== null &&
          images.map((item) => (
            <Image
              key={item}
              src={item}
              width={"60"}
              height={"60"}
              alt="image"
             
              onClick={() => setSelectedImg(item)}
              style={{cursor:'pointer', margin:'5px'}}
            />
          ))}
      </Box>
    </Box>
  );
};

export default ImgView;
