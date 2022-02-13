import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        className="text"
        variant="h6"
        style={{
          fontWeight: "12px",
          marginTop: "72px",
          marginLeft: "92px",
          color: "#6141ab",
        }}
      >
        <u> What we do</u>
      </Typography>
      <Typography
        className="text"
        variant="h3"
        style={{
          fontWeight: "bold",
          marginLeft: "92px",
          marginTop: "17px",
          color: "#000000",
        }}
      >
        Digital marketing <br /> agency on a <br />
        mission
      </Typography>
      <Button
        style={{
          background: "red",
          marginTop: "22px",
          marginLeft: "92px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          textAlign: "center",
        }}
      >
        Explor More
      </Button>
    </CardContent>
  </React.Fragment>
);
const Page6 = () => {
  return (
    <Paper elevation={0} className="explor">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>{card}</div>
        <div style={{ width: "60%" }}></div>
      </div>
    </Paper>
  );
};

export default Page6;
