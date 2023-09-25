import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Img1 from "../../Files/shoes3.jpg";

const HomeCardWide = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "white", mt: 2, mb:2, display:{xs:'block', sm:"flex"} }}>
      <Box
        sx={{
          objectFit: "cover",
          height: {
            xs: "200px",
            sm:"auto"
          },
          width:{xs:"100%", sm:"35%"},
          position: "relative"
        }}
      >
        <Image src={Img1} fill={true} alt="addis couture product" />
      </Box>
      <Box sx={{p:"5%"}}>
        
        <Typography variant="h4" color={'textColor1.main'} fontWeight={'bold'}>Today's hottest</Typography>
        <Typography variant="h5" color={'textColor1.main'}>Nike Air</Typography>
        <Typography color={'textColor1.main'}>2023 High Quality Luxury Designer Shoes Men Women Famous Brand Original Shoes Sneakers Hot Sale Popular Casual Shoes For Women</Typography>
        <Typography variant="h4" color={'textColor1.main'}>Price : 2000 ETB</Typography>
        <Typography color={'textColor1.main'}>Delivery Available (149.99 ETB)</Typography>
        <Typography color={'textColor1.light'}>Posted on Dec 20, 2023</Typography>
      </Box>
    </Box>
  );
};

export default HomeCardWide;
