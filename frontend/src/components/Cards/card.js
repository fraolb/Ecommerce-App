import { Box, Paper, Rating, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ItemImg from "../../Files/shoes.jpg";
import { Suspense } from "react";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Suspense fallback={layout}>
      <Box
        sx={{
          borderRadius: "10px",
          objectFit: "contain",
          // width:{
          //     xs:"150px",
          //     md:"260px"
          // }
          maxWidth: "260px",
        }}
        component={Paper}
      >
        <Link href={`/${item.title}/${item.id}`} style={{textDecoration:'none', color:'#2E8D5A'}}>
        <Box
          sx={{
            height: {
              xs: "150px",
              md: "180px",
              lg: "230px",
            },
            position: "relative",
            borderRadius: "10px",
            opacity: "1",
            objectFit: "cover",
          }}
        >
          <Image
            src={item.images[0]}
            fill={true}
            style={{ borderRadius: "10px" }}
            alt={item.title}
          />
        </Box>
        <Box display={"block"} sx={{ p: "10px" }}>
          <Typography variant="h5" style={styles.twoLineTypography}>
            {item.title} :{" "}
            <span style={{ fontWeight: "normal" }}>{item.description}</span>
          </Typography>
          <Box
            bgcolor="#f0f2f2"
            display={"inline-flex"}
            sx={{ pl: "4px", pr: "4px", borderRadius: "3px", ml: "5%" }}
          >
            <Typography>{item.category}</Typography>
          </Box>
          <Box>
            <Typography>{item.price} $</Typography>
          </Box>
          <Box>
            <Rating
              name="read-only"
              value={item.rating}
              readOnly
              size="small"
            />
          </Box>
          <Box display={"flex"}>
            <LocationOnIcon fontSize="small" color="success" />
            <Typography fontSize={"14px"}>{item.brand}</Typography>
          </Box>
        </Box>
        </Link>
      </Box>
    </Suspense>
  );
};

export default Card;

const styles = {
  twoLineTypography: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, // Number of lines to display
    overflow: "hidden",
  },
};

const layout = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        objectFit: "contain",
        // width:{
        //     xs:"150px",
        //     md:"260px"
        // }
        maxWidth: "260px",
      }}
      component={Paper}
    >
      <Box
        sx={{
          height: {
            xs: "150px",
            md: "180px",
            lg: "230px",
          },
          position: "relative",
          borderRadius: "10px",
          opacity: "1",
          objectFit: "cover",
          bgcolor: "#e0e0e0",
        }}
      ></Box>
      <Box display={"block"} sx={{ p: "10px" }}>
        <Box bgcolor={"#e0e0e0"} sx={{ width: "100%", height: "13px" }}></Box>

        <Box
          bgcolor="#f0f2f2"
          display={"inline-flex"}
          sx={{ pl: "4px", pr: "4px", borderRadius: "3px", ml: "5%" }}
        >
          {/* <Typography>{item.category}</Typography> */}
        </Box>
        <Box>{/* <Typography>{item.price} $</Typography> */}</Box>
        <Box></Box>
        <Box display={"flex"}>loading</Box>
      </Box>
    </Box>
  );
};
