import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import TabBar from './TabBar'
import {Container, CssBaseline} from "@mui/material";
function Home() {
  return (
    
    <Container sx={{ bgcolor: "white", height: "100vh"}} maxWidth="xl" style={{ width: "100vw", paddingLeft: 0, paddingRight: 0 }}>

    {/* Image of company logo */}
    <Nav/>
   
    {/* Banner */}
      <Banner/>

    {/* Tab Bar */}
      <TabBar />

  </Container>
  )
}

export default Home