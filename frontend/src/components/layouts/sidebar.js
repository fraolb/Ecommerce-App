"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
const categories = ["Cloth", "Shoes", "Pants", "Tshirt"];
const prices = [1000, 2000, 3000, 4000];

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
    <Box>
      <Typography variant="h6">Categories</Typography>
      {categories.map((category) => (
        <Typography
          key={category}
          onClick={() => handleFilter("category", category)}
          textAlign={"center"}
        >
          {category}
        </Typography>
      ))}

      <Typography variant="h6">Price</Typography>
      {prices.map((priceValue) => (
        <Typography
          key={priceValue}
          onClick={() => handleFilter("price", priceValue)}
          textAlign={"center"}
          bgcolor={price.includes(priceValue) ? "primary.light" : "unset"}
        >
          {priceValue}
        </Typography>
      ))}
    </Box>
  );
};

export default Sidebar;
