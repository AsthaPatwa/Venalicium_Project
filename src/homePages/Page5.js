import {  CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image20 from "../asset/image20.png";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "../CSS/Home.css";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
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
        variant="h6"
        style={{
          marginTop: "25px",
          fontWeight: "bold",
          color: "grey",
        }}
      >
        Making sure your visitors convert
      </Typography>
      <Typography
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
      </Typography>
      <button
        style={{
          fontSize: "18px",
          background: "red",
          marginTop: "22px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          textAlign: "center",
          height: "44px",
          width: "164px",
          border: "2px none red",
          cursor: "pointer",
        }}
      >
        View Case
      </button>
    </CardContent>
  </React.Fragment>
);

const Page5 = () => {
  return (
    <Paper elevation={0} className="case" style={{ height: "650px" }}>
<<<<<<< HEAD
      <Typography
        style={{
          fontSize: "15px",
          marginTop: "28px",
          color: "#6141ab",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <u>View Case</u>
      </Typography>
      <Typography
        variant="h3"
        style={{
          fontWeight: "bold",
          marginTop: "18px",
          color: "#000000",
          textAlign: "center",
          marginBottom: "10%",
        }}
      >
        Selected projects
      </Typography>
=======
      <div style={{ textAlign: "center" }}>
        <a
          href="#"
          style={{
            textAlign: "center",
            fontSize: "15px",
            marginTop: "25px",
            color: "#a058e8",
          }}
        >
          View Case
        </a>
        <Typography
          variant="h3"
          style={{
            fontWeight: "bold",
            marginTop: "12px",
            color: "#000000",
            textAlign: "center",
            marginBottom: "10%",
          }}
        >
          Selected projects
        </Typography>
      </div>

>>>>>>> b5a2db7d67b99d61d5c9f29e1926db6057c0a485
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img
            alt="image"
            src={image20}
            style={{ width: "75%", marginLeft: "90px" }}
          />
          <CircleOutlinedIcon
            style={{
              color: "#a058e8",
              marginTop: "59px",
              marginLeft: "303px",
              width: "13px",
            }}
          />
        </div>
        <div style={{ width: "50%" }}> {card}</div>
      </div>
    </Paper>
  );
};

export default Page5;
