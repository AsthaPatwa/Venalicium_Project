import { Paper, Typography } from "@mui/material";
import React from "react";
import effect2 from "../asset/effect-2.png";
import image from "../asset/pages-banner-8.png";

const Cpage1 = () => {
  return (
    <Paper elevation={0}>
      <div style={{ height: "500px", display: "flex", width: "100%" }}>
        <div>
          <img
            src={effect2}
            alt="image"
            style={{ marginLeft: "53px", marginTop: "51px" }}
          />
        </div>
        <div
          className="imag"
          style={{
            marginTop: "122px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          <p className="text" style={{ fontWeight: "bold" }}>
            Contact us
          </p>
          <h2
            className="text"
            style={{
              fontWeight: "bold",
              fontSize: "45px",
              marginTop: "17px",
            }}
          >
            Let's talk <br /> How can we help?
          </h2>
        </div>
      </div>
    </Paper>
  );
};

export default Cpage1;
