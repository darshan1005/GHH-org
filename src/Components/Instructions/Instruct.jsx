import { Box, Typography } from "@mui/material";
import React from "react";

const Instruct = () =>{
  return (
      <Box sx={{padding: '10px',display:'flex',flexDirection: 'column', margin: '0 auto', width:'max-content'}}>
        <Typography variant="h6"><mark>Disclamimer!!</mark></Typography>
        <Typography>
          Our <b>services</b> are always available to you. Please use the contact details above solely for the purpose of seeking help. Misuse of this information is <mark>prohibited</mark>.
        </Typography>
      </Box>
  )
}

export default Instruct;