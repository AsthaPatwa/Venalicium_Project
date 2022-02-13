import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        className="text"
        variant="h3"
        style={{
          fontWeight: "bold",
          marginTop: "15px",
          color: "#000000",
        }}
      >
        Conversion Rate <br />
        Optimization
      </Typography>
      <Typography
        className="text"
        variant="h5"
        style={{
          marginTop: "17px",
          color: "grey",
        }}
      >
        Making sure your visitors convert
      </Typography>
      <Typography
        className="text"
        variant="h6"
        style={{
          fontSize: "15px",
          marginTop: "18px",
          color: "grey",
        }}
      >
        Getting customers to your site is only part of thr battle. Once there,
        you have <br /> to make sure they buy, sign up or otherwise engage with
        you brand to drive revenue. Conversion rate Optimization(CRO)
      </Typography>
      <Button
        style={{
          background: "red",
          marginTop: "22px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          textAlign: "center",
        }}
      >
        View Case
      </Button>
    </CardContent>
  </React.Fragment>
);

const Page5 = () => {
  return (
    <Paper elevation={0} className="case" style={{ height: "500px" }}>
      <Typography
        className="text"
        variant="h6"
        style={{
          fontSize: "15px",
          marginTop: "25px",
          color: "#6141ab",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <u>View Case</u>
      </Typography>
      <Typography
        className="text"
        variant="h4"
        style={{
          fontWeight: "bold",
          marginTop: "12px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        Selected projects
      </Typography>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img alt="image" src="../asset/image20.png" />
        </div>
        <div style={{ width: "50%" }}> {card}</div>
      </div>
    </Paper>
  );
};

export default Page5;
