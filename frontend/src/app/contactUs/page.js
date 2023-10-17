import { Box, TextField, Typography } from "@mui/material";
import FullLayout from "@/components/layouts/fullLayout";

const ContactUs = () => {
  return (
    <FullLayout>
      <Box
        sx={{
          p: 3,
          pt: { xs: 5, md: 3 },
          pb: 4,
          //   bgcolor: "bgcolor1.main",
          mt: { xs: "120px", sm: "80px", md: "100px" },
          minHeight: "60vh",
        }}
      >
        <Typography
          variant="h4"
          color={"textColor1.light"}
          textAlign={"center"}
        >
          Contact Us
        </Typography>
        <Box sx={{ display: "block" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: '10px' }}>
            <TextField
              label="Full Name"
              variant="standard"
              sx={{ width: { xs: "80%", sm: "60%", md: "30%" } }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: '10px' }}>
            {" "}
            <TextField
              label="Email"
              variant="standard"
              sx={{ width: { xs: "80%", sm: "60%", md: "30%" } }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: '10px' }}>
            <TextField
              label="Message"
              variant="standard"
              sx={{ width: { xs: "80%", sm: "60%", md: "30%" } }}
              multiline
              rows={4}
            />
          </Box>
        </Box>
      </Box>
    </FullLayout>
  );
};

export default ContactUs;
