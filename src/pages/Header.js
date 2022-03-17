import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "../Assents/Image/logo.png";
import Back from "../Assents/Image/back.png";
import Algorismic from "../Assents/Image/Algorismic.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export const Header = () => {
  return (
    <Box>
      <Container sx={{background: 'white', py: 2, px: { xs: 4, sm: 6 } }}>
        <Box
          sx={{
              
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: '10px',
            flexDirection:{xs:'column', sm:'row'}
          }}
        >
          <img src={Logo} />
          <Box>
            <form style={{border: '1px solid grey', padding: '5px 10px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat'}}>
              <input style={{background:'transparent',fontFamily: 'Montserrat', border: 'none', outline:'none'}} placeholder="Search" />
              <SearchRoundedIcon />
            </form>
          </Box>
        </Box>
      </Container>
      <Box sx={{width: '100%', position: 'relative'}}>
          <img style={{width: '100%', objectFit: 'cover', backgroundPosition: 'center'}} src={Back} />

          <Box sx={{position: 'absolute', top: '0', left: '0', zIndex: 10, height: '600px', width: '100%', py:{xs:2, sm:6, md:15}}}>
              <Typography sx={{color: 'white', fontSize: {xs: '40px', sm: '65px', md: '90px'}, textAlign:'center', width: '100%', fontWeight: 700}}>Top Universities</Typography>
              <Typography sx={{color: 'white', fontSize: {md: '20px'}, textAlign:'center', width: '100%', fontWeight: 600}}>What are the most popular Universities in the world?</Typography>

              <Button sx={{borderRadius: '20px', width: '150px', textTransform: 'capitalize', color: 'white', background:'#001C3D', "&:hover":{background:'#001C3D'}, mx: {xs:10, sm: 18, md: 25, lg:38}, my:3}}>Go to see</Button>
          </Box>
      </Box>
    </Box>
  );
};


export const Footer = () => {
    return (
        <Box sx={{background: '#C4C4C4', textAlign: 'center', py:2, width: '100% !important'}}>
            <img src={Logo}/>
            <Typography sx={{color: 'white', fontWeight: 500}}>What are the most popular Universities in the world?</Typography>
            <img src={Algorismic}/>
        </Box>
    )
}