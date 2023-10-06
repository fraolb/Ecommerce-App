"use client";

import FullLayout from "@/components/layouts/fullLayout";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CarouselImg from "./CarouselImg";
import CarouselCard from "@/components/carousel/carouselCard";
import ImgView from "./imgView";
import ImgDescription from "./imgDescription";

async function getTicket(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

const SinglePage = async ({ params }) => {
  const product = await getTicket(params.id);

  return (
    <FullLayout>
      <Box
        sx={{
          mt: { xs: "43%", sm: "18%", md: "16%", lg: "10%" },
          p: "1%",
          pb: 4,
          minHeight: "60vh",
          mb: 4
        }}
      >
        <Grid container spacing={{ xs: 2, xl: 3 }}>
          <Grid item xs={12} sm={6} >
            <ImgView images={product.images} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImgDescription product={product} />
          </Grid>
        </Grid>
      </Box>
    </FullLayout>
  );
};

export default SinglePage;
