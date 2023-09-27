import Nav from "@/components/layouts/nav";
import Sidebar from "@/components/layouts/sidebar";
import { Drawer, Box } from "@mui/material";

const DRAWER_WIDTH = 220;

export default function DashboardLayout({ children }) {
  return (
    <section style={{ display: "flex" }}>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          display:{xs:'none', md:'block'},
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width:DRAWER_WIDTH,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
            // border: "none",
            mt: ["38px", "46px", "54px"],
            
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Sidebar />
        </Box>
      </Drawer>
      {children}
    </section>
  );
}
