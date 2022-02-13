import { Paper, Typography } from "@mui/material";
import React from "react";

const Page4 = () => {
  return (
    <Paper elevation={0} style={{ height: "500px" }}>
      <Typography
        className="text"
        variant="h4"
        style={{
          fontWeight: "bold",
          marginTop: "3px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        We're a Digital agency
      </Typography>
      <Typography
        className="text"
        variant="h6"
        style={{
          fontSize: "15px",
          marginTop: "15px",
          color: "#000000",
          textAlign: "center",
        }}
      >
        We are an Creative agency, based in New York, Vision Every company is
        performing best <br /> online. Mission helping business to find the
        perfect and most successful <br /> strategy, to be online.
      </Typography>
      <div>
        <div style={{ width: "50%" }}>
          <img alt="image" src="../asset/image19.png" />
        </div>
        <div style={{ width: "50%" }}></div>
      </div>
    </Paper>
  );
};

export default Page4;
