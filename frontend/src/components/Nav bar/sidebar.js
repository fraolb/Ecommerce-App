"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Box, Typography } from "@mui/material";
const categories = ["Cloth", "Shoes", "Pants", "Tshirt"];
const price = [1000, 2000, 3000, 4000];

const Sidebar = () => {
  const router = useRouter();
  const [filterData, setFilterData] = useState({ category: [], price: [] });

  const handleFilter = (type, value) => {
    // Check if the type is category or price
    if (type === "category") {
      // Check if the category is already in the filterData
      const updatedCategories = filterData.category.includes(value)
        ? filterData.category.filter((cat) => cat !== value)
        : [...filterData.category, value];

      setFilterData({ ...filterData, category: updatedCategories });

      // Build the query string for the URL
      const queryString = updatedCategories.length > 0 ? `category=${updatedCategories.join(",")}` : "";
      router.push(`/?${queryString}`);
    } else if (type === "price") {
      // Check if the price is already in the filterData
      const updatedPrices = filterData.price.includes(value)
        ? filterData.price.filter((price) => price !== value)
        : [...filterData.price, value];

      setFilterData({ ...filterData, price: updatedPrices });

      // Build the query string for the URL
      const queryString = updatedPrices.length > 0 ? `price=${updatedPrices.join(",")}` : "";
      router.push(`/?${queryString}`);
    }
  };

  return (
    <Box>
       <Typography variant="h6">Categories</Typography>
      {categories.map((category) => (
        <Typography key={category} onClick={() => handleFilter("category", category)}>
          {category}
        </Typography>
      ))}
      
      <Typography variant="h6">Price</Typography>
      {price.map((priceValue) => (
        <Typography key={priceValue} onClick={() => handleFilter("price", priceValue)}>
          {priceValue}
        </Typography>
      ))}
      
    </Box>
  );
};

export default Sidebar;
