import { Box, Typography, Grid, IconButton } from "@mui/material";
import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#22655c",
        pl: "5%",
        pr: "5%",
        // border:"3px red solid"
      }}
    >
      <Grid
        container
        spacing={2}
        justify="center"
        // alignItems="center"
        pt={2}
        mb={2}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Box display={"block"}>
            {category.map((item) => (
              <Box key={item.name}>
                <Link
                  href={`${item.link}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h5" color={"white"}>
            Resources
          </Typography>
          <Box display={"block"}>
            {resources.map((item) => (
              <Box key={item.name}>
                <Link
                  href={`${item.link}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h5" color={"white"}>
            About Addis Couture
          </Typography>
          <Box display={"block"}>
            {aboutus.map((item) => (
              <Box key={item.name}>
                <Link
                  href={`${item.link}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Typography variant="h5" color={"white"} ml={1}>
            Follow Us
          </Typography>
          <Box display={"block"}>
            <Box>
              <IconButton sx={{ml:0}}>
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                {" "}
                <YouTubeIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5, pb: 2 }}>
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          <Link
            color="inherit"
            href="https://mui.com/"
            style={{ color: "white" }}
          >
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

// const category = [
//   "Womens Dress",
//   "Sport Kits",
//   "Pants",
//   "Tshirt",
//   "Dress",
//   "Suits",
//   "Shoes",
//   "Jacket",
// ];

const category = [
  {
    name: "Womens Dress",
    link: "/women",
  },
  {
    name: "Mens Cloths",
    link: "/men",
  },
  {
    name: "Sport Kits",
    link: "sport",
  },
  {
    name: "Shoes",
    link: "/shoes",
  },
  {
    name: "Collection of Brands",
    link: "/womens-jewellery",
  },
];
const resources = [
  {
    name: "Help Center",
    link: "/help",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Shipping and Delivery",
    link: "cart",
  },
  {
    name: "Contact Us",
    link: "contactUs",
  },
  {
    name: "Contact Developer",
    link: "contactDeveloper",
  },
];

const aboutus = [
  {
    name: "About Us",
    link: "/aboutus",
  },
  {
    name: "Our Stores",
    link: "cart",
  },
  {
    name: "Careers",
    link: "/career",
  },
];
