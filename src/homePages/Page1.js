import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        className="text"
        variant="h2"
        style={{
          marginTop: "2px",
          marginLeft: "72px",
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
          marginTop: "8px",
          marginLeft: "72px",
          color: "#FFFFFF",
        }}
      >
        How can we help you become your company's marketing hero?
      </Typography>
      <Button
        style={{
          background: "red",
          marginTop: "22px",
          marginLeft: "72px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
        }}
      >
        Digital Marketing
      </Button>
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
        }}
      >
        <div style={{ width: "60%" }}>{card}</div>
        <div style={{ width: "40%" }}>
          <img alt="image" src="../asset/image14.png" />
        </div>
      </div>
    </Paper>
  );
};

export default Page1;
