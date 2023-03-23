import React from 'react'
import { Box, Stack} from "@mui/material";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Stack width="100vw" direction={"row"} bgcolor={"#fff"} p={"20px 100px"}   >
      <Link to="/"> 
          <img  style= {{height:"50px", width:"auto",}} src="/assets/AI Planet Logo.png" alt="" />
      </Link>
    </Stack>
  )
}

export default Nav