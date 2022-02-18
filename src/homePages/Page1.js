import { CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image14 from "../asset/image14.png";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography
        variant="h2"
        style={{
          marginTop: "2px",
          marginLeft: "90px",
          fontWeight: "bold",
          color: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        Digital marketing & search agency
      </Typography>
      <Typography
        variant="h6"
        style={{
          marginTop: "11px",
          marginLeft: "90px",
          color: "#FFFFFF",
        }}
      >
        How can we help you become your company's marketing hero?
      </Typography>
      <button
        style={{
          fontSize: "18px",
          background: "red",
          marginTop: "26px",
          marginLeft: "90px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          border: "2px none red",
          cursor: "pointer",
          height: "45px",
          width: "186px",
        }}
      >
        Digital Marketing
      </button>
      <CircleOutlinedIcon
        style={{
          color: "#FFFFFF",
          marginBottom: "-158px",
          marginLeft: "-55px",
          width: "13px",
        }}
      />
    </CardContent>
  </React.Fragment>
);
const Page1 = () => {
  return (
    <Paper elevation={6}>
      <div
        style={{
          backgroundColor: "rgb(119, 77, 219)",

          display: "flex",
          height: "525px",
        }}
      >
        <div style={{ width: "60%" }}>{card}</div>
        <div>
          <img
            style={{ width: "680px" }}
            src={image14}
            alt="image"
            style={{
              marginTop: "43px",
              marginLeft: "-62px",
              width: "110%",
              height: "98%",
            }}
          />
        </div>
      </div>
    </Paper>
  );
};

export default Page1;
