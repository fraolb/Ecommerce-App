import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "#22655c" }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="h5" color={"white"}>
            Shop by category
          </Typography>
          <Link href={"/filter,tshirt"}>Tshirts</Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          Buy
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          Buy
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          Buy
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          Buy
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
