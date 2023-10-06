"use client";

import { use, useEffect } from "react";
import { Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

const AddToCart = ({ item }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const isProductInCart = items.some((product) => product.id === item.id);

  const handleAddToCart = async () => {
    await dispatch(addToCart(item));
  };
  return (
    <Box display={"flex"} justifyContent={"center"} mt={2}>
      <Button
        variant="contained"
        onClick={handleAddToCart}
        // disabled={isProductInCart}
      >
        {isProductInCart ? "Added to Cart" : "Add to Cart"}
      </Button>
    </Box>
  );
};

export default AddToCart;
