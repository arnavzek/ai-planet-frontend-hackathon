import React from 'react'
import { Box, Container, CssBaseline, Typography ,Button, createTheme} from "@mui/material";
import './bt.css'
import { useNavigate } from 'react-router-dom';


function Banner() {
const navigate = useNavigate()

function handleNavigate(){
  navigate('add')
}
  return (
    <header style= {{
        backgroundSize : "cover",
        backgroundImage: `url("./assets/waves.png")`,
        backgroundColor:'#003145',
        paddingBottom:'1rem',
        position:'relative',
        width:'100%',
        backgroundPositionX: -200,
        marginBottom:'1rem'
      }} >
        {/* Bulb Image */}
        <img
          src="./assets/Hand holding bulb 3D.png"
          alt="Commented Image"
          style={{
            position: 'absolute', 
            top: 35, // Position to the top of the header
            right:100, // Position to the right of the header
            zIndex: 1, // Set a higher z-index than the header
            width: '200px',
          }}
        />
        <Typography sx={{pt:'7rem', fontSize: 40,height:'10px' ,pl:'100px',
          color:'white', fontWeight:'bold', fontFamily:'Poppins'}} 
          variant="h1" >Hackathon Submissions</Typography>
        <Typography sx={{pt:'4rem', fontSize: 15, 
          color:'white', pl:'100px'}} gutterBottom>
          lorem30 aew wqe wew weqwewqe
          qeweqw eqwewq we er wr<br/> wqe qw ew q wqe wq ew eq wewer w w e   wqe e w w e w e qeweqw <br/>
          wer  we we w  qwe  wew e we r f e r t rt  rt er w r e  
          </Typography>

          {/* Upload button  */}
        <button id="up_sub" onClick={handleNavigate}> Upload Submission </button>
      </header>
  )
}

export default Banner