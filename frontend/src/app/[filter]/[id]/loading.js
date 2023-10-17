import { Box, Skeleton, Grid } from "@mui/material";
import FullLayout from "@/components/layouts/fullLayout";

const Loading = () => {
  return (
    <FullLayout>
      <Box
        sx={{
          mt: { xs: "43%", sm: "18%", md: "16%", lg: "10%" },
          p: "1%",
          pb: 4,
          minHeight: "60vh",
          mb: 4,
        }}
      >
        <Grid container spacing={{ xs: 2, xl: 3 }}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ p: "5%" }}>
              <Skeleton
                sx={{
                  width: "100%",
                  height: {
                    xs: "280px",
                    md: "340px",
                    lg: "440px",
                  },
                  position: "relative",
                  borderRadius: "10px",
                  opacity: "1",
                  objectFit: "cover",
                  mb: "15px",
                }}
              ></Skeleton>
              <Box>
                <Skeleton
                  width={"60"}
                  height={"60"}
                  style={{ cursor: "pointer", margin: "5px" }}
                ></Skeleton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ m: "5%", pr:'5%' }}>
                <Skeleton width={'50%'} height={'20px'}/>
                <Skeleton width={'80%'} height={'30vh'}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FullLayout>
  );
};

export default Loading;
