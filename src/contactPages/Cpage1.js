import { Paper, Typography } from "@mui/material";
import React from "react";
import effect2 from "../asset/effect-2.png";
import picture from "../asset/pages-banner-8.png";

const Cpage1 = () => {
  return (
    <Paper elevation={0}>
      <div style={{ height: "873.33px", display: "flex", width: "100%" }}>
        <div style={{display: "flex"}}>
          <img
            src={effect2}
            alt="reload"
            style={{ marginLeft: "123px", marginTop: "61px", width: "330px", height: "400px" }}
          />
       
          <img
            src={picture}
            alt="reload"
            style={{ marginLeft: "570px", marginTop: "61px", width: "495px", height: "400px"}}
          />
        </div>
        <div style={{marginLeft: "-815px", marginTop: "120px"}}>
        <h4 >Contact us</h4>
        <p style={{fontSize:"26px"}}><h1 style={{marginLeft:"-60px",marginTop:"40px"}}>Let's Talk</h1>
        <h1 style={{marginLeft:"-150px",marginTop:"15px"}}>How can we help?</h1></p></div>
             </div>
    </Paper>
  );
};

export default Cpage1;
