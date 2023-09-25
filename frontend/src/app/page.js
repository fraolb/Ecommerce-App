import * as React from "react";
import { Box, Grid } from "@mui/material";

import FullLayout from "@/components/layouts/fullLayout";

import Link from "next/link";
import HomeCard from "@/components/Cards/homeCard";
import Carousel from "@/components/carousel/carouselCard";
import HomeCardWide from "@/components/Cards/homeCardWide";

export default function HomePage(item) {
  return (
    <FullLayout>
      <Box
        sx={{ p: 3, bgcolor: "bgcolor1.main", mt: ["68px", "76px", "94px"] }}
      >
        <Grid
          container
          spacing={2}
          // border={"solid"}
          sx={{
            height: {
              xs: "320px",
              md: "400px",
              lg: "500px",
            },
            mt: { xs: 4, md: 0 },
          }}
        >
          <Grid
            item
            xs={0}
            sm={0}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Carousel />
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, xl: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
        </Grid>
        <Box>
          <HomeCardWide />
        </Box>
        <Grid container spacing={{ xs: 2, xl: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
        </Grid>
      </Box>
    </FullLayout>
  );
}
