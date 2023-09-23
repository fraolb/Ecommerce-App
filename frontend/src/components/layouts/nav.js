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
import {
  IconButton,
  TextField,
  Divider,
  Grid,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import Logo from "../../Files/logo.png";

import MenuBtn from "./menu";

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

              border: "1px solid",
              borderColor: "primary.main",
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
            <Divider
              orientation="vertical"
              sx={{ bgcolor: "primary.light" }}
              variant="middle"
              flexItem
            />
            <IconButton>
              <SearchIcon color="success" />
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
            // justifyContent: "center",
            borderTop: "1px solid",
            borderColor: "primary.light",
            minHeight: "40px",
            pl: "2%",
            pr: "2%",
          }}
        >
          <Box>
            <MenuBtn />
          </Box>
          <Box color={"primary.main"} component={Link} href={"/sport"} sx={{textDecoration:'none', pt:"5px", ml:"10px", mr:"10px"}}>
            Fashion
          </Box>
          <Box color={"primary.main"} component={Link} href={"/sport"} sx={{textDecoration:'none', pt:"5px", ml:"10px", mr:"10px"}}>
           Shoes
          </Box>
          <Box color={"primary.main"} component={Link} href={"/sport"} sx={{textDecoration:'none', pt:"5px", ml:"10px", mr:"10px"}}>
            Kids
          </Box>
          <Box color={"primary.main"} component={Link} href={"/sport"} sx={{textDecoration:'none', pt:"5px", ml:"10px", mr:"10px"}}>
            Sports
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Nav;
