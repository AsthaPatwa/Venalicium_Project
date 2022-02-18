import { Paper, Typography } from "@mui/material";
import React from "react";
import image19 from "../asset/image19.png";
import pic44 from "../asset/pic44.png";
import "../CSS/Home.css";

const Page4 = () => {
  return (
    <Paper elevation={0} style={{ height: "690px" }}>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          marginTop: "3px",
          color: "#000000",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        We're a Digital agency
      </Typography>
      <Typography
        style={{
          fontSize: "15px",
          marginTop: "18px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        We are an Creative agency, based in New York, Vision Every company is
        performing best <br /> online. Mission helping business to find the
        perfect and most successful <br /> strategy, to be online.
      </Typography>
      <div style={{display: "flex"}}>
        <div style={{ width: "50%", }}>
          <img alt="image" src={image19} style={{ width: "80%", marginLeft: "20px" }} />
        </div>
        <div style={{ width: "50%" }}>
        <img alt="image" src={pic44} style={{ width: "60%", marginLeft: "150px" }} />
        </div>
      </div>
      
    </Paper>
  );
};

export default Page4;
