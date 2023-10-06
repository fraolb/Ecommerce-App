"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchDataBySearch } from "@/redux/slices/filterSlice";
import { useRouter } from 'next/navigation'

const Search = () => {
  const [searchProduct, setSearchProduct]= useState("")
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSearch =()=>{
    const data ={product : searchProduct}
    dispatch(fetchDataBySearch(data))
    router.push('/search', { scroll: false })
  }
  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: {xs:'5px',sm:"30px"},
        pl: "1%",
        pr: "1%",
        display: "flex",
        border: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <TextField
        variant="standard"
        fullWidth
        sx={{ mt: "5px", ml:'10px' }}
        InputProps={{
          disableUnderline: true,
        }}
        value={searchProduct}
        onChange={(e)=>setSearchProduct(e.target.value)}
      />
      <Divider
        orientation="vertical"
        sx={{ bgcolor: "primary.light" }}
        variant="middle"
        flexItem
      />
      <IconButton onClick={()=>handleSearch()}>
        <SearchIcon color="success" />
      </IconButton>
    </Box>
  );
};

export default Search;
