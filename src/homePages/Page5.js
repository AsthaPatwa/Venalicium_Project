import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image20 from "../asset/image20.png";

const card = (
  <React.Fragment>
    <CardContent>
      <h2
        className="text"
        style={{
          fontSize: "29px",
          fontWeight: "bold",
          marginTop: "15px",
          color: "#000000",
        }}
      >
        Conversion Rate <br />
        Optimization
      </h2>
      <p
        className="text"
        style={{
          marginTop: "17px",
          color: "grey",
        }}
      >
        Making sure your visitors convert
      </p>
      <p
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
        you brand to drive <br /> revenue. Conversion rate Optimization(CRO)
      </p>
      <button
        style={{
          background: "red",
          marginTop: "22px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          textAlign: "center",
          height: "35px",
          width: "95px",
          border: "2px none red",
        }}
      >
        View Case
      </button>
    </CardContent>
  </React.Fragment>
);

const Page5 = () => {
  return (
    <Paper elevation={0} className="case" style={{ height: "500px" }}>
      <p
        className="text"
        style={{
          fontSize: "15px",
          marginTop: "25px",
          color: "#6141ab",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <u>View Case</u>
      </p>
      <h1
        className="text"
        style={{
          fontWeight: "bold",
          marginTop: "12px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        Selected projects
      </h1>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            alt="image"
            src={image20}
            style={{ width: "75%", marginLeft: "90px" }}
          />
        </div>
        <div style={{ width: "50%" }}> {card}</div>
      </div>
    </Paper>
  );
};

export default Page5;
