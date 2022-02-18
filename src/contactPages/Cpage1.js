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
        <div style={{marginLeft: "-815px"}}>
        <h4 >Contact us</h4>
        <p><h1>Let's Talk</h1>
        <h1>How can we help?</h1></p></div>
             </div>
    </Paper>
  );
};

export default Cpage1;
