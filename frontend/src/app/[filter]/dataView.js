"use client";

import { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid } from "@mui/material";
import Card from "@/components/Cards/card";
import Loading from "./loading";

import { filterByCategory, fetchData } from "@/redux/slices/filterSlice";

const DataView = ({filter}) => {
  const dispatch = useDispatch()
  const {category, data} = useSelector((state)=>state.filter)
  // const [data, setData] = useState([]);

  useEffect(() => {
    // Dispatch filterByCategory action to update the category in Redux state
    if(filter == 'search'){
      return
    }
    dispatch(filterByCategory(filter));

    // Fetch data based on the updated category

      dispatch(fetchData());
    
  }, [category, dispatch]);
  
  console.log('the category that is added is ', category)
   
  return (
    <Box>
      <Suspense fallback={<Loading />}>
      <Grid container spacing={{ xs: 2, xl: 3 }}>
        {data !== null && data.map((item) => (
          <Grid item key={item.id} xs={6} sm={4} md={4} lg={3} xl={2.4}>
            <Card key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
      </Suspense>
    </Box>
  );
};

export default DataView;
