import { Paper, Typography } from "@mui/material";
import React from "react";
import effect2 from "../asset/effect-2.png";
import picture from "../asset/pages-banner-8.png";

const Cpage1 = () => {
  return (
    <Paper elevation={0}>
      <div style={{ height: "643.33px", display: "flex", width: "100%" }}>
        <div style={{ display: "flex" }}>
          <img
            src={effect2}
            alt="reload"
            style={{
              marginLeft: "123px",
              marginTop: "61px",
              width: "330px",
              height: "400px",
            }}
          />

          <img
            src={picture}
            alt="reload"
            style={{
              marginLeft: "370px",
              marginTop: "61px",
              width: "470px",
              height: "400px",
            }}
          />
        </div>

        <div style={{ marginLeft: "-765px", marginTop: "120px" }}>
          <Typography
            variant="h6"
            style={{
              marginLeft: "-20px",
              marginTop: "40px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Contact us
          </Typography>
          <div style={{ fontSize: "26px" }}>
            <Typography
              variant="h2"
              style={{
                marginLeft: "-60px",
                marginTop: "40px",
                fontWeight: "bold",
              }}
            >
              Let's Talk
            </Typography>
            <Typography
              variant="h2"
              style={{
                marginLeft: "-150px",
                marginTop: "15px",
                fontWeight: "bold",
              }}
            >
              How can we help?
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Cpage1;
