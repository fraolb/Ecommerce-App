import { Box } from "@mui/material";

import Nav from "./nav";
import Footer from "./footer";

const FullLayout = ({ children }) => {
  return (
    <Box>
      <Nav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // bgcolor: "background.default",
          // pb: 4,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default FullLayout;
