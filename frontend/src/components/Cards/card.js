import { Box, Paper, Rating, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ItemImg from "../../Files/shoes.jpg";

const Card = ({item}) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        objectFit: "contain",
        // width:{
        //     xs:"150px",
        //     md:"260px"
        // }
        maxWidth:"260px"
      }}
      component={Paper}
    >
      <Box
        sx={{

          height: {
            xs:"150px",
            md:"180px",
            lg:"230px",
          },
          position: "relative",
          borderRadius: "10px",
          opacity: "1",
          objectFit: "cover",
        }}
      >
        <Image
          src={item.img}
          fill={true}
          style={{ borderRadius: "10px" }}
          alt={item.title}
        />
      </Box>
      <Box display={'block'} sx={{p:"10px"}}>
        <Typography variant="h5" >
          {item.title} : <span style={{ fontWeight:"normal"}}>{item.description}</span>
        </Typography>
        <Box bgcolor="#f0f2f2" display={"inline-flex"} sx={{pl:"4px", pr:"4px", borderRadius:"3px", ml:"5%"}}>
          <Typography >{item.type}</Typography>
        </Box>
        <Box>
            <Typography>{item.price} $</Typography>
        </Box>
        <Box>
        <Rating name="read-only" value={item.rating} readOnly size="small" />
        </Box>
        <Box display={'flex'}>
            <LocationOnIcon fontSize="small"  color="success" />
            <Typography fontSize={'14px'}>{item.location}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
