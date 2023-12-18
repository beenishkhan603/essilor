// import React from 'react'
// // import Image from 'next/image'

// import './style.css'

// const Index = () => {
//     return (
//         <div className='main-div'>
//             <div className='heading'>Complete your Eyezen lenses with</div>
//             <div className='cards-container'>
//                 <div className='categories'>
//                     <div className='left'>Protect your eyes</div>
//                     <div className='right'>Enhance your eyes</div>
//                 </div>
//                 <div className='cards'>
//                     <div className='card'>
//                         <div className='header'>
//                         <div className='left'>    
//                         </div>
//                         <div className='right'></div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Index
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import "./style.css";
export default function EyezenLens(props) {
  const { imrUrl, bandColor, context, brandLogo } = props;
  return (
    <>
    

    <Card
      className="eye-lens-card"
      sx={{
        maxWidth: 350,
        position: "relative",
        border: "none",
        boxShadow: "none !important",
        borderRadius: "20px",
      }}
    >
      <Image
        component="img"
        alt="green iguana"
        height={250}
        width={300}
        src={imrUrl ? imrUrl : "/img/about.jpg"}
        style={{ cursor: "pointer" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          height: "250px",
          width: "8%",
          backgroundColor: bandColor ? bandColor : "rgba(0, 0, 0, 0.8)",
          zIndex: 2, // Adjust the z-index as needed
        }}
      />
      <CardContent>
        <div style={{ width: "300px", height: "150px" }}>
          <CardMedia
            style={{ objectFit: "" }}
            component="img"
            alt="green iguana"
            height="100"
            image={brandLogo ? brandLogo : "./img/eyexen.webp"}
          />
        </div>
        <Typography gutterBottom component="div" className="context">
          {context ? context : "No Context"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
      >
        <Button variant="contained" className="discover-button">
          Discover
        </Button>
      </CardActions>
    </Card>
    </>
  );
}