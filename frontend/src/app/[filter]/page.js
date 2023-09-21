import Sidebar from "@/components/Nav bar/sidebar";
import Nav from "@/components/Nav bar/nav";
import { Box, Drawer, Typography } from "@mui/material";


const FilteredItem = ({ params }) => {
  const data = params.filter;
  console.log("the data is ", data);
  return (
    <Box>
      
      <Box sx={{ display: "flex" }}>
        the data contains {data}
      </Box>
    </Box>
  );
};

export default FilteredItem;
