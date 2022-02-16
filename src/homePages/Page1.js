import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image14 from "../asset/image14.png";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        className="text"
        variant="h2"
        style={{
          marginTop: "2px",
          marginLeft: "90px",
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
          marginTop: "11px",
          marginLeft: "90px",
          color: "#FFFFFF",
        }}
      >
        How can we help you become your company's marketing hero?
      </Typography>
      <button
        className="text"
        style={{
          background: "red",
          marginTop: "26px",
          marginLeft: "90px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          border: "2px none red",
          cursor: "pointer",
          height: "45px",
          width: "130px",
        }}
      >
        Digital Marketing
      </button>
    </CardContent>
  </React.Fragment>
);
const Page1 = () => {
  return (
    <Paper elevation={0}>
      <div
        style={{
          height: "400px",
          backgroundColor: "blueviolet",
          display: "flex",
          height: "572px",
        }}
      >
        <div style={{ width: "60%" }}>{card}</div>
        <div style={{ marginTop: "25px", width: "40%" }}>
          <img
            src={image14}
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Page1;
