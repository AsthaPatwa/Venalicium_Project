import {  CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image18 from "../asset/image18.png";
import "../CSS/Home.css";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        style={{
          marginTop: "30px",
          marginLeft: "58px",
          color: "#a058e8",
          justifyContent: "center",
        }}
      >
        <u> About SEO Digital agency </u>
      </Typography>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          marginTop: "15px",
          marginLeft: "58px",
          color: "#000000",
        }}
      >
        Attract Customers <br /> with <br /> Content And SEO
      </Typography>
      <Typography
        variant="h6"
        style={{
          marginTop: "12px",
          marginLeft: "58px",
          color: "grey",
        }}
      >
        How can <mark>Dmsa</mark> Help Your Business?
      </Typography>
      <Typography
        variant="h6"
        style={{
          fontSize: "15px",
          marginTop: "18px",
          marginLeft: "58px",
          color: "grey",
        }}
      >
        Building your online presence helps attract more potential clients. Our{" "}
        <br />
        integrated marketing team will work directly with you to understand{" "}
        <br /> what makes your business unique, and provide more qualified leads
        to <br /> achieve success in your industry
      </Typography>
      <button
        style={{
          background: "red",
          marginTop: "22px",
          marginLeft: "58px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          border: "2px none red",
          height: "37px",
          width: "175px",
          cursor: "pointer",
          fontSize: "21px",
        }}
      >
        Check Website
      </button>
    </CardContent>
  </React.Fragment>
);
const Page3 = () => {
  return (
    <Paper elevation={0} className="check" style={{ display: "flex" }}>
      <div style={{ width: "60%", marginTop: "75px", marginLeft: "68px" }}>
        {" "}
        {card}{" "}
      </div>
      <div style={{ width: "40%" }}>
        <img
          src={image18}
          alt="image"
          style={{ width: "85%", marginTop: "75px", marginLeft: "-44px" }}
        />
      </div>
    </Paper>
  );
};

export default Page3;
