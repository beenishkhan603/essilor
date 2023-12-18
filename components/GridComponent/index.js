import React from "react";
import { Typography, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

import "./style.css";

function GridComponent() {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <div style={{ flexBasis: "50%" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "42px",
                letterSpacing: 0,
                fontWeight: "bold",
              }}
            >
              Which Eyezen lenses are right for me?
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                lineHeight: "28px",
                letterSpacing: 0,
                fontWeight: "bold",
              }}
            >
              Looking for more than simple correction
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "black",
                lineHeight: "24px",
                fontFamily: "sans-serif",
              }}
            >
              Eyezen® Start lenses are optimised single vision lenses designed
              to relax and protect8 your eyes, from 12 years old and up.
              Discover Eyezen® Start
            </Typography>
          </div>
        </div>
        <div style={{ flexBasis: "50%" }}>
          <div>
            <Image
              src="/img/grid_image.avif"
              height={600}
              width={600}
              alt="grid_image"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <div
          style={{
            flexBasis: "100%",
            width: "500px",
            height: "500px",
            position: "relative",
          }}
          className="background-image"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
              margin: "10rem 0 0 5rem",
              gap: "1rem",
            }}
          >
            <div>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "10px",
                  lineHeight: "16px",
                  letterSpacing: "4%",
                  fontWeight: "bold",
                }}
              >
                Find your nearest option
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "32px",
                  lineHeight: "45px",
                  letterSpacing: 0,
                  fontWeight: "bold",
                }}
              >
                Get an Essilor lens solution at a partnered optician
              </Typography>
            </div>
            <div>
              <TextField
                id="outlined-address-input"
                type="text"
                autoComplete="current-address"
                variant="outlined"
                placeholder="Add an address"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "white" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    width: "100%",
                    borderRadius: "30px",
                    boxShadow: "0 0 0 1px var(--essilor-color-grey-20)",
                    outline: 0,
                    transition: ".25s ease",
                  },
                  "& .MuiInputLabel-root": {
                    display: "none",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
              />
            </div>
            <div>
              <Button className="find-button">Find an optician</Button>
            </div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(270deg, rgba(1, 14, 61, 0), rgba(1, 14, 61, 0.7))",
              position: "absolute",
              opacity: 0.5,
              top: 0,
              left: 0,
              width: "500px",
              height: "500px",
              zIndex: 2,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default GridComponent;
