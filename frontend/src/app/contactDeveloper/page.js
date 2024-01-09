import { Box, Grid } from "@mui/material";
import FullLayout from "@/components/layouts/fullLayout";
import Image from "next/image";
import FraolImage from "@/Files/fraol.jpg";

const ContactDev = () => {
  return (
    <FullLayout>
      <Box
        sx={{
          p: 3,
          pt: { xs: 5, md: 3 },
          pb: 4,
          //   bgcolor: "bgcolor1.main",
          mt: { xs: "150px", sm: "80px", md: "120px" },
          minHeight: "60vh",
        }}
      >
        <Grid container spacing={2} justify="center">
          <Grid
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                height: {
                  xs: "350px",
                  md: "380px",
                  lg: "430px",
                },
                width: { xs: "100%", sm: "60", md: "60%" },
                position: "relative",
                borderRadius: "10px",
                opacity: "1",
                objectFit: "cover",
              }}
            >
              <Image src={FraolImage} fill={true} alt="developer image" />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            desc
          </Grid>
        </Grid>
      </Box>
    </FullLayout>
  );
};

export default ContactDev;
