import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image12 from "../asset/image12.png";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FFFFFF" }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={image12} alt="image" style={{ width: "110px", height: "112px",  marginLeft: "40px",marginBottom: "-15px", marginTop: "-10px" }} />
            <Link to="/">
              <button
                className="text"
                style={{
                  color: "#000000",
                  textAlign: "center",
                  cursor: "pointer",
                  display: "contents",
                }}
              >
                Home 
              </button>
            </Link>
            <button
              className="text"
              style={{
                color: "#000000",
                marginLeft: "-30px",
                cursor: "pointer",
                display: "contents",
              }}
            >
              About
            </button>
            <button
              className="text"
              style={{
                color: "#000000",
                textAlign: "center",
                cursor: "pointer",
                display: "contents",
                marginLeft: "10%",
              }}
            >
              Services
            </button>
            <Link to="/campaign"></Link>
            <p
              className="text"
              style={{
                background: "yellow",
                color: "red",
                textAlign: "center",
                cursor: "pointer",
                display: "contents",
                marginLeft: "4px",
                marginBottom: "40px",
                fontSize: "15px"
              }}
            >
              Campaign
              </p>
            <Link to="/contact">
              <button
                className="text"
                style={{
                  background: "#7378F1",
                  borderRadius: "33.5px",
                  color: "#FFFFFF",
                  textAlign: "center",
                  cursor: "pointer",
                  border: "2px none #7378F1",
                  marginLeft: "819px",
                  width: "200px",
                  height: "53px",
                  marginTop: "0px",
                }}
              >
                <h1>Contact Us</h1>
              </button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
