"use client";

import { useState } from "react";
import {
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Icon,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import Image from "next/image";

import ProfileImg from "../../Files/shoes3.jpg";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LogoutIcon from "@mui/icons-material/Logout";

import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation'

const NavRightSide = () => {
  const [drawer, setDrawer] = useState(false);
  const {count} = useSelector((state)=> state.cart)
  const router = useRouter()
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box>
      <IconButton onClick={()=>router.push('/cart')}>
        <Badge badgeContent={count} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={() => setDrawer(!drawer)}>
        <AccountCircleOutlinedIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawer}
        onClose={() => toggleDrawer()}
        sx={{ zIndex: 4000 }}
      >
        <Box sx={{ width: { xs: "170px", sm: "250px", md: "300px" }, mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: {
                  xs: "50px",
                  md: "60px",
                  lg: "120px",
                },
                height: {
                  xs: "50px",
                  md: "60px",
                  lg: "120px",
                },
                position: "relative",
                borderRadius: "50px",
                opacity: "1",
                objectFit: "cover",
              }}
            >
              <Image
                src={ProfileImg}
                fill={true}
                style={{ borderRadius: "50%" }}
                alt="addis couture profile"
              />
            </Box>
          </Box>

          <Box mt={2}>
            <Typography textAlign={'center'}>fraolbereket@gmail.com</Typography>
          </Box>

          <List>
            {profileMenus.map((item) => (
              <ListItem disablePadding key={item.id}>
                <ListItemButton>
                  {/* <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                  </ListItemIcon> */}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavRightSide;

const profileMenus = [
  {
    id: 1,
    name: "Profile",
    icon: PersonOutlineOutlinedIcon,
    link: "/profile",
  },
  {
    id: 2,
    name: "Settings",
    icon: SettingsIcon,
    link: "/settings",
  },
  {
    id: 3,
    name: "FAQ",
    icon: LiveHelpIcon,
    link: "/FAQ",
  },
  {
    id: 4,
    name: "Logout",
    icon: LogoutIcon,
    link: "/login",
  },
];
