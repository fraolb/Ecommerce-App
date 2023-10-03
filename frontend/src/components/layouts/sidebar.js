"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
const categories = [
  {
    id: 1,
    link: "/womens-dresses",
    name: "Womens",
  },
  {
    id: 2,
    link: "/mens-shirts",
    name: "Mens",
  },
  {
    id: 3,
    link: "/mens-shoes",
    name: "Shoes",
  },
  {
    id: 4,
    link: "/womens-jewellery",
    name: "Jewelleries",
  },
  {
    id: 5,
    link: "/laptops",
    name: "Accessories",
  },
  {
    id: 6,
    link: "/smartphones",
    name: "Kids",
  },
];
const prices = [
  "Less than 1000$",
  "1000$ - 2000$",
  "2000$ - 3000$",
  "3000$ - 4000$",
  "> 4000$",
];

import { useSelector, useDispatch } from "react-redux";
import {
  addToCategory,
  removeFromCategory,
  addToPrice,
  removeFromPrice,
} from "@/redux/slices/filterSlice";

const Sidebar = () => {
  const router = useRouter();
  // const [filterData, setFilterData] = useState({ category: [], price: [] });

  const dispatch = useDispatch();
  const category = useSelector((state) => state.filter.category);
  const price = useSelector((state) => state.filter.price);

  const handleFilter = (type, value) => {
    if (type === "category") {
      // Check if the category is already in the filterData
      category.includes(value)
        ? dispatch(removeFromCategory(value))
        : dispatch(addToCategory(value));
    } else if (type === "price") {
      // Check if the price is already in the filterData
      price.includes(value)
        ? dispatch(removeFromPrice(value))
        : dispatch(addToPrice(value));
    }

    let data = [];
    category.length > 0 ? data.push(category) : null;
    price.length > 0 ? data.push(price) : null;

    router.push(`/${data}`);
  };

  return (
    <Box sx={{ pl: "4%" }}>
      <Typography variant="h6" color={"textColor1.main"}>
        Categories
      </Typography>
      <Box sx={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        {categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              bgcolor: "bgcolor1.main",
              pl: "2%",
              pr: "2%",
              mr: "2%",
              ml: "2%",
              mb: "2%",
              mt: "2%",
              borderRadius: "5px",
            }}
          >
            <Typography
             
              onClick={() => handleFilter("category", category)}
              textAlign={"center"}
              sx={{cursor:"pointer", color:"textColor1.main"}}
            >
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h6" color={"textColor1.main"}>
        Price
      </Typography>
      <Box>
        {prices.map((priceValue) => (
          <Typography
            key={priceValue}
            color={"textColor1.main"}
            onClick={() => handleFilter("price", priceValue)}
            textAlign={"left"}
          >
            {priceValue}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
