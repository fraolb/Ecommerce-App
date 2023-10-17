"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import FullLayout from "@/components/layouts/fullLayout";
import { useDispatch, useSelector } from "react-redux";
import Item from "./item";
import { clearCart } from "@/redux/slices/cartSlice";

const Cart = () => {
  const { items, count } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch()
  useEffect(() => {
    if (items.length < 1) return;
    // Initialize total amount
    let totalAmount = 0;

    // Loop through each item in the cart
    for (const item of items) {
      // Calculate the amount for the current item (amount * price)
      const itemAmount = item.amount * item.price;

      // Add the item's amount to the total
      totalAmount += itemAmount;
    }
    setTotal(totalAmount);
  }, [items]);

  return (
    <FullLayout>
      <Box
        sx={{
          p: 3,
          pt: { xs: 5, md: 3 },
          pb: 4,
          //   bgcolor: "bgcolor1.main",
          mt: { xs: "120px", sm: "80px", md: "100px" },
          minHeight: "60vh",
        }}
        // id="#"
      >
        <Container maxWidth="sm" sx={{}}>
          <Typography
            variant="h4"
            color={"textColor1.main"}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Your bag
          </Typography>
          {items.length > 0 ? (
            items.map((i) => <Item key={i.id} product={i} />)
          ) : (
            <Typography
              variant="h6"
              color={"textColor1.main"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              is currently empty
            </Typography>
          )}
          {items.length > 0 && (
            <Box>
              <Divider sx={{ color: "textColor1.light" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                  mb: 2,
                }}
              >
                <Typography variant="h6" color={"textColor1.main"}>
                  Total
                </Typography>
                <Typography variant="h6" color={"textColor1.light"}>
                  {total} $
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 3,
                  mb: 2,
                }}
              >
                <Button color="error" sx={{ ml: 0 }} onClick={()=>dispatch(clearCart())}>
                  Clear Cart
                </Button>
                <Button variant="contained">Checkout</Button>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </FullLayout>
  );
};

export default Cart;
