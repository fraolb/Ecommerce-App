import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";

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
        alignItems="center"
        pt={2}
        mb={2}
      >
        <Grid item xs={6} sm={4} md={2.4}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Box display={"block"}>
            {category.map((item) => (
              <Box key={item}>
                <Link
                  href={`/${item}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Box display={"block"}>
            {category.map((item) => (
              <Box key={item}>
                <Link
                  href={`/${item}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Box display={"block"}>
            {category.map((item) => (
              <Box key={item}>
                <Link
                  href={`/${item}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Box display={"block"}>
            {category.map((item) => (
              <Box key={item}>
                <Link
                  href={`/${item}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2.4}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Box display={"block"}>
            {category.map((item) => (
              <Box key={item}>
                <Link
                  href={`/${item}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </Link>
              </Box>
            ))}
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

const category = [
  "Sport Kts",
  "Pants",
  "Tshirt",
  "Dress",
  "Suits",
  "Shoes",
  "Jacket",
];
