import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "@mui/material/Drawer";


import Nav from "../components/Nav bar/nav";
import Card from "@/components/Cards/card";
import Link from "next/link";



import Img1 from "../Files/shoes.jpg";
import Img2 from "../Files/shoes2.jpg";
import Img3 from "../Files/shoes3.jpg";
import Img4 from "../Files/pant.jpg";
import Img5 from "../Files/pant2.jpg";
import Img6 from "../Files/pant3.jpg";
import Img7 from "../Files/pant4.jpg";
import { Typography } from "@mui/material";

import Sidebar from "@/components/Nav bar/sidebar";

const DRAWER_WIDTH = 220;



export default function HomePage(item) {
  
  return (
    <Nav>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
            // border:"none",
            mt: ["38px", "46px", "54px"],
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography>Categories</Typography>
          <Sidebar />
        </Box>
      </Drawer>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={{xs:2, xl:3}}>
          {data.map((item) => (
            <Grid item xs={10} sm={5} md={3} lg={3} xl={2.4}>
              <Card key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Nav>
  );
}

const data = [
  {
    id: 1,
    img: Img1,
    title: "Sports snicker",
    type: "cloth",
    description: "A nike air sports running shoes for both genders",
    price: 1000,
    rating: 4,
    location: "Addis Ababa",
  },
  {
    id: 2,
    img: Img2,
    title: "Vans",
    type: "cloth",
    description: "Original brand shoes Vans of the wall for ladies/ men",
    price: 1500,
    rating: 4,
    location: "Addis Ababa",
  },
  {
    id: 3,
    img: Img3,
    title: "Nike Air",
    type: "cloth",
    description: "A white colored Nike Ariforce for women",
    price: 1700,
    rating: 4,
    location: "Addis Ababa",
  },
  {
    id: 4,
    img: Img4,
    title: "Pant",
    type: "cloth",
    description: "A comfortable pant for womens. in four colours.",
    price: 900,
    rating: 4,
    location: "Addis Ababa",
  },
  {
    id: 5,
    img: Img5,
    title: "Jeans",
    type: "cloth",
    description: "A male jeans.",
    price: 900,
    rating: 4,
    location: "Addis Ababa",
  },
  {
    id: 6,
    img: Img6,
    title: "Jeans Pant",
    type: "cloth",
    description: "A Jeans pants for womens of any age available.",
    price: 1700,
    rating: 4,
    location: "Addis Ababa",
  },
  {
    id: 7,
    img: Img7,
    title: "Pink",
    type: "cloth",
    description: "A comfortable pants for ladies.",
    price: 1700,
    rating: 4,
    location: "Addis Ababa",
  },
];
