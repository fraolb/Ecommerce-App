import { Box, TextField, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        borderRadius: {xs:'5px',sm:"30px"},
        pl: "1%",
        pr: "1%",
        display: "flex",
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
  );
};

export default Search;
