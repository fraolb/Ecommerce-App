import Sidebar from "@/components/layouts/sidebar";
import Nav from "@/components/layouts/nav";
import { Box, Drawer, Typography, Grid } from "@mui/material";
import Counter from "./counter";
import Card from "@/components/Cards/card";
import FullLayout from "@/components/layouts/fullLayout";
import DataView from "./dataView";
import { Suspense } from "react";

import Img1 from "../../Files/shoes.jpg";
import Img2 from "../../Files/shoes2.jpg";
import Img3 from "../../Files/shoes3.jpg";
import Img4 from "../../Files/pant.jpg";
import Img5 from "../../Files/pant2.jpg";
import Img6 from "../../Files/pant3.jpg";
import Img7 from "../../Files/pant4.jpg";
import Loading from "./loading";

const DRAWER_WIDTH = 220;

// async function getData() {
//   try {
//     const res = await fetch('https://dummyjson.com/products/');

//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     // Handle errors here, such as logging the error or displaying an error message
//     console.error(error);
//     throw error; // You can rethrow the error if needed for higher-level error handling.
//   }
// }


const FilteredItem = async({ params }) => {
  const data1 = params.filter;
  console.log("the data is ", data1);
  // const dataFetched = await getData()
  // console.log('fetched data are ', dataFetched)
  return (
    <FullLayout>
      <Box sx={{ mt: {xs:"43%", sm:'18%', md:'16%', lg:'10%'}, p:'1%', pb:4, minHeight:"60vh",  }}>
        {/* <Suspense fallback={<Loading />}> */}
          <DataView filter={data1} />
        {/* </Suspense> */}
        
      </Box>
    </FullLayout>
  );
};

export default FilteredItem;

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

