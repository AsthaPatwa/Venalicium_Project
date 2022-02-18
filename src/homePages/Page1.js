import { Button, CardContent, Paper, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";
import image14 from "../asset/image14.png";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        className="text"
        variant="h1"
        style={{
          fontSize: "85px",
          marginTop: "1px",
          marginLeft: "50px",
          fontWeight: "bold",
          color: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        Digital marketing & search agency
      </Typography>
      <Typography
        className="text"
        variant="h6"
        style={{
          fontSize: "23px",
          marginTop: "23px",
          marginLeft: "50px",
          color: "#FFFFFF",
        }}
      >
        How can we help you become your company's marketing hero?
      </Typography>
      <button
        className="text"
        style={{
          background: "Tomato",
          marginTop: "49px",
          marginLeft: "50px",
          color: "#FFFFFF",
          borderRadius: "22px",
          border: "2px none red",
          cursor: "pointer",
          height: "74px",
          width: "255px",
        }}
      >
       <h1 > Digital Marketing</h1>
      </button>
    </CardContent>
  </React.Fragment>
);
const Page1 = () => {
  return (
    <Paper elevation={0}>
      <div
        style={{
          backgroundColor: "#7378F1",
          display: "flex",
          height: "572px",
        }}
      >
        <div style={{ width: "60%" }}>{card}</div>
        <div >
          <img style={{  width: "680px" }}
            src={image14}
            alt="image"
            style={{ marginTop: "43px",  marginLeft: "-28px", width: "110%", height: "98%" }}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Page1;
