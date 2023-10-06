"use client";

import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseItemAmount, decreaseItemAmount } from "@/redux/slices/cartSlice";

const Item = ({ product }) => {
  const {count , items} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleRemoveItem =(item)=>{
    dispatch(removeFromCart(item))
  }
  return (
    <Box mt={1}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box
            sx={{
              width: { xs: "100%", sm: "70%" },
              height: {
                xs: "90px",
                sm: "100px",
              },
              position: "relative",
              borderRadius: "10px",
              opacity: "1",
              objectFit: "cover",
              mb: "15px",
            }}
          >
            {product?.images !== undefined && (
              <Image src={product.images[0]} fill={true} alt="img" />
            )}
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <Typography variant="h6" color={"textColor1.main"}>
              {product?.title}
            </Typography>
            <Typography variant="h5" color={"textColor1.light"}>
              {product?.price} $
            </Typography>
            {/* <Typography  color={'#b83b1b'}>remove</Typography> */}
            <Button sx={{ color: "#b83b1b", pl:0, }} mt={2} onClick={()=>handleRemoveItem(product)}>
              Remove
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            display="flex"
            justifyContent="flex-end"
          
          >
            <Box display="block">
              <Box>
                <IconButton onClick={()=> dispatch(increaseItemAmount(product))}>
                  <KeyboardArrowUpIcon />
                </IconButton>
              </Box>
              <Box ml={2}>{product.amount}</Box>
              <Box>
                <IconButton onClick={()=>dispatch(decreaseItemAmount(product))}>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Item;
