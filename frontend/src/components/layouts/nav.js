import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton, TextField, Divider, Grid } from "@mui/material";
import Image from "next/image";
import Logo from "../../Files/logo.png";

const Nav = () => {
  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: 2000 }}>
        <Toolbar
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <MenuIcon /> */}
          {/* <DashboardIcon
            sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
          /> */}
          <Image
            src={Logo}
            width={150}
            height={50}
            alt="Logo of Addis Couture"
          />
          <Box
            width={"50%"}
            display={"flex"}
            sx={{
              borderRadius: "30px",
              pl: "1%",
              pr: "1%",

              border: "1px #a0a0a0 solid",
            }}
          >
            <TextField
              variant="standard"
              fullWidth
              sx={{ mt: "5px" }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton component={Link} href={"./auth/login"}>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Box
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px #a0a0a0 solid",
            minHeight: "40px",
          }}
        >
          <Box>Hello there </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Nav;
