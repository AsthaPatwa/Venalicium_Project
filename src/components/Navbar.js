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
            <img src={image12} alt="image" style={{ width: "20%" }} />
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
                textAlign: "center",
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
              }}
            >
              Services
            </button>
            <button
              className="text"
              style={{
                color: "#000000",
                textAlign: "center",
                cursor: "pointer",
                display: "contents",
              }}
            >
              Campaign
            </button>
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
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
