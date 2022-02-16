import { Paper, Typography } from "@mui/material";
import React from "react";
import image19 from "../asset/image19.png";

const Page4 = () => {
  return (
    <Paper elevation={0} style={{ height: "650px" }}>
      <h3
        className="text"
        style={{
          fontWeight: "bold",
          marginTop: "3px",
          color: "#000000",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        We're a Digital agency
      </h3>
      <p
        className="text"
        style={{
          fontSize: "15px",
          marginTop: "-18px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        We are an Creative agency, based in New York, Vision Every company is
        performing best <br /> online. Mission helping business to find the
        perfect and most successful <br /> strategy, to be online.
      </p>
      <div>
        <div style={{ width: "50%" }}>
          <img alt="image" src={image19} style={{ width: "80%" }} />
        </div>
        <div style={{ width: "50%" }}></div>
      </div>
    </Paper>
  );
};

export default Page4;
