import { Box, Rating, Typography } from "@mui/material";
import AddToCart from "./addToCart";

const ImgDescription = ({ product }) => {
  return (
    <Box  sx={{ m: "5%", pr:'5%' }}>
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Typography variant="h4" sx={{ color: "textColor1.main", mr: 2 }}>
          {" "}
          {product.title}{" "}
        </Typography>
        <Box sx={{ mt: "10px" }}>
          {" "}
          <Rating value={product.rating} />{" "}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "left", mt:2, mb:2 }}>
        <Typography mr={4} sx={{ color: "textColor1.light" }}>
          {product.brand}
        </Typography>
        <Typography sx={{ color: "textColor1.main" }}>
          {product.category}
        </Typography>
      </Box>
      <Box display={'flex'} mb={2}>price: <Typography ml={2} variant="h6" color={'textColor1.light'}>{product.price} $</Typography></Box>
      <Typography>
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}
        {product.description}

  

      </Typography>
      <Box>
        <AddToCart item={product} />
      </Box>
    </Box>
  );
};

export default ImgDescription;
