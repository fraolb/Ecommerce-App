"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
const categories = ["Cloth", "Shoes", "Pants", "Tshirt"];
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
          <Typography
            key={category}
            onClick={() => handleFilter("category", category)}
            textAlign={"center"}
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
            {category}
          </Typography>
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
