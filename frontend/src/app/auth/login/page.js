import Image from "next/image";
import { Box } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import Form from "./form";

import Slogan from "../../../Files/slogan.png";

const Login = () => {
  return (
    <Box>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={5}
          md={7}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/"} style={{ width: "60%" }}>
            <Image
              src={Slogan}
              style={{ width: "100%", height: "auto" }}
              alt="Shop Smart, Shop Stylish, Addis Couture"
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          square
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              my: { xs: 2, sm: 8 },
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "10px",
              pt: { xs: "5px", sm: "10px" },
              width: {
                xs: "80%",
                sm: "70%",
                md: "60%",
              },
              //  border:"solid"
            }}
            // component={Paper}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.main",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" color={"primary.main"} variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Form />
              <Grid container>
                <Grid item xs={12} sm={5}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Link href="/auth/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box sx={{ mt: 5 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  {"Copyright © "}
                  <Link color="inherit" href="https://mui.com/">
                    Your Website
                  </Link>{" "}
                  {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
