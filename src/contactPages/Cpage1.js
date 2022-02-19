import { Paper, Typography } from "@mui/material";
import React from "react";
import effect2 from "../asset/effect-2.png";
import picture from "../asset/pages-banner-8.png";

const Cpage1 = () => {
  return (
    <Paper elevation={0}>
      <div style={{ height: "643.33px", display: "flex", width: "100%" }}>
        <div style={{display: "flex"}}>
          <img
            src={effect2}
            alt="reload"
            style={{
              marginLeft: "133px",
              marginTop: "61px",
              width: "350px",
              height: "400px",
            }}
          />

          <img
            src={picture}
            alt="reload"
            style={{
              marginLeft: "535px",
              marginTop: "61px",
              width: "498px",
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
                marginLeft: "-95px",
                marginTop: "40px",
                fontWeight: "bold",
              }}
            >
              Let's Talk
            </Typography>
            <Typography
              variant="h2"
              style={{
                marginLeft: "-210px",
                marginTop: "10px",
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
