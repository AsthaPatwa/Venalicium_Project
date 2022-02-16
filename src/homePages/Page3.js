import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image18 from "../asset/image18.png";

const card = (
  <React.Fragment>
    <CardContent>
      <p
        className="text"
        style={{
          marginTop: "20px",
          marginLeft: "92px",
          color: "#6141ab",
          justifyContent: "center",
        }}
      >
        <u> About SEO Digital agency </u>
      </p>
      <h1
        className="text"
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "15px",
          marginLeft: "92px",
          color: "#000000",
        }}
      >
        Attract Customers <br /> with <br /> Content And SEO
      </h1>
      <h3
        className="text"
        style={{
          marginTop: "12px",
          marginLeft: "92px",
          color: "grey",
        }}
      >
        How can <mark>Dmsa</mark> Help Your Business?
      </h3>
      <p
        className="text"
        variant="h6"
        style={{
          fontSize: "15px",
          marginTop: "18px",
          marginLeft: "92px",
          color: "grey",
        }}
      >
        Building your online presence helps attract more potential clients. Our{" "}
        <br />
        integrated marketing team will work directly with you to understand{" "}
        <br /> what makes your business unique, and provide more qualified leads
        to <br /> achieve success in your industry
      </p>
      <button
        style={{
          background: "red",
          marginTop: "22px",
          marginLeft: "92px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          border: "2px none red",
          height: "33px",
          width: "125px",
          cursor: "pointer",
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
      <div
        className="text"
        style={{ width: "60%", marginTop: "75px", marginLeft: "68px" }}
      >
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
