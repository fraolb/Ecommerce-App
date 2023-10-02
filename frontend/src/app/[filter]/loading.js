import { Box, Grid, Paper } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{minWidth:"70%", height:'100vh'}}>
      <Grid container spacing={{ xs: 2, xl: 3 }}>
        {data !== null &&
          data.map((item) => (
            <Grid item key={item.id} xs={6} sm={4} md={4} lg={3} xl={2.4}>
              <Box
                sx={{
                  borderRadius: "10px",
                  objectFit: "contain",
                  // width:{
                  //     xs:"150px",
                  //     md:"260px"
                  // }
                  maxWidth: "260px",
                }}
                component={Paper}
              >
                <Box
                  sx={{
                    height: {
                      xs: "150px",
                      md: "180px",
                      lg: "230px",
                    },
                    position: "relative",
                    borderRadius: "10px",
                    opacity: "1",
                    objectFit: "cover",
                    bgcolor:"#e0e0e0"
                  }}
                >
                 
                </Box>
                <Box display={"block"} sx={{ p: "10px" }}>
                    <Box bgcolor={'#e0e0e0'} sx={{width:'100%', height:"13px"}}>

                    </Box>
                  
                  <Box
                    bgcolor="#f0f2f2"
                    display={"inline-flex"}
                    sx={{ pl: "4px", pr: "4px", borderRadius: "3px", ml: "5%" }}
                  >
                    {/* <Typography>{item.category}</Typography> */}
                  </Box>
                  <Box>
                    {/* <Typography>{item.price} $</Typography> */}
                  </Box>
                  <Box>
                    
                  </Box>
                  <Box display={"flex"}>
                    loading
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Loading;


const data = [
    {
      id: 1,
   
      title: "Sports snicker",
      type: "cloth",
      description: "A nike air sports running shoes for both genders",
      price: 1000,
      rating: 4,
      location: "Addis Ababa",
    },
    {
      id: 2,
     
      title: "Vans",
      type: "cloth",
      description: "Original brand shoes Vans of the wall for ladies/ men",
      price: 1500,
      rating: 4,
      location: "Addis Ababa",
    },
    {
      id: 3,
    
      title: "Nike Air",
      type: "cloth",
      description: "A white colored Nike Ariforce for women",
      price: 1700,
      rating: 4,
      location: "Addis Ababa",
    },
    {
      id: 4,
     
      title: "Pant",
      type: "cloth",
      description: "A comfortable pant for womens. in four colours.",
      price: 900,
      rating: 4,
      location: "Addis Ababa",
    },
    {
      id: 5,
     
      title: "Jeans",
      type: "cloth",
      description: "A male jeans.",
      price: 900,
      rating: 4,
      location: "Addis Ababa",
    },
    {
      id: 6,
     
      title: "Jeans Pant",
      type: "cloth",
      description: "A Jeans pants for womens of any age available.",
      price: 1700,
      rating: 4,
      location: "Addis Ababa",
    },
    {
      id: 7,
    
      title: "Pink",
      type: "cloth",
      description: "A comfortable pants for ladies.",
      price: 1700,
      rating: 4,
      location: "Addis Ababa",
    },
  ];
  