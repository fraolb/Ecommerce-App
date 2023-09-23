import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import Img1 from "../../Files/pant4.jpg";

const HomeCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5%",
        bgcolor: "white",
        height: {
          xs: "260px",
          md: "340px",
          lg: "440px",
        },
        // border: "solid",
        cursor:'pointer',
        

      }}
      // component={Link}
      // href={'/filer'}
    >
      <Box>
        <Typography variant="h6" color={"#045933"}>
          Fashionable cloths
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "150px",
            md: "260px",
            lg: "340px",
          },
          position: "relative",
          borderRadius: "10px",
          opacity: "1",
          objectFit: "cover",
        }}
      >
        <Image src={Img1} fill={true} alt="addis couture product" />
      </Box>
      <Box>
        <Typography color={"primary.main"}>Shop now</Typography>
      </Box>
    </Box>
  );
};

export default HomeCard;
