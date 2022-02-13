import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

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
            <Button className="text" style={{ color: "#000000" }}>
              Home
            </Button>
            <Button className="text" style={{ color: "#000000" }}>
              About
            </Button>
            <Button className="text" style={{ color: "#000000" }}>
              About
            </Button>
            <Button className="text" style={{ color: "#000000" }}>
              Services
            </Button>
            <Button className="text" style={{ color: "#000000" }}>
              Campaign
            </Button>
            <Button
              className="text"
              color="inherit"
              style={{ background: "#7378F1", borderRadius: "33.5px" }}
            >
              Contact Us
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
{
  /* <div style={{ height: "96px", width: "100%" }}>Navabr</div>; */
}
