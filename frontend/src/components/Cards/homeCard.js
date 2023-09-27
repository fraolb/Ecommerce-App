import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const HomeCard = ({ item }) => {
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
        cursor: "pointer",
      }}
      // component={Link}
      // href={'/filer'}
    >
      <Box>
        <Typography variant="h6" color={"textColor1.main"}>
          {item.name}
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
        <Link href={item.route}>
          <Image src={item.imgLink} fill={true} alt="addis couture product" />
        </Link>
      </Box>
      <Box>
        <Typography color={"primary.main"} component={Link} href={item.route}>
          Shop now
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeCard;
