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
        id='#'
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
            xs={12}
            sm={0}
            md={4}
            lg={4}
            xl={4}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <HomeCard item={NewArrival}/>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Carousel />
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, xl: 3 }}>
          {ClothingCategories.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <HomeCard item={item} />
            </Grid>
          ))}
        </Grid>

        <Box>
          <HomeCardWide />
        </Box>
        {/* <Grid container spacing={{ xs: 2, xl: 3 }}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <HomeCard />
          </Grid>
        </Grid> */}
      </Box>
    </FullLayout>
  );
}

const ClothingCategories = [
  {
    id: 1,
    name: "Women's Clothing",
    route: "/womens",
    imgLink:
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80"
  },
  {
    id: 2,
    name: "Men's Clothing",
    route: "/mens",
    imgLink:
      "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    id: 3,
    name: "Shoes",
    route: "/shoes",
    imgLink:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 4,
    name: "Kids Collection",
    route: "/kids",
    imgLink:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    name: "Accessories",
    route: "/accessories",
    imgLink:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
  },

  {
    id: 6,
    name: "Collection of Brands",
    route: "/collection",
    imgLink:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
  },
];

const NewArrival = {
  id: 0,
  name: "New Arrivals",
  route: '/newArrivals',
  imgLink:
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
};
