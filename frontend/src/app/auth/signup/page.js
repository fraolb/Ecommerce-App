import { Box } from "@mui/material";
import Form from "./form";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Slogan from "../../../Files/slogan.png";

const Signup = () => {
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
            // border:"solid"
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
            // border:"solid"
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
                xs: "90%",
                sm: "80%",
                md: "70%",
              },
              //  border:"solid"
            }}
          >
            <Box
              sx={{
                marginTop: { xs: 0, sm: 5, md: 8 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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
                Sign up
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Form />
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/auth/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
