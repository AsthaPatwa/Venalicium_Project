import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image15 from "../asset/image15.png";
import image16 from "../asset/image16.png";
import image27 from "../asset/image27.png";
import image29 from "../asset/image29.png";

const card = (
  <React.Fragment>
    <CardContent>
      <p
        className="text"
        variant="h6"
        style={{
          fontWeight: "12px",
          marginTop: "326px",
          marginLeft: "155px",
          color: "#6141ab",
        }}
      >
        <u> What we do</u>
      </p>
      <h2
        className="text"
        variant="h3"
        style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginLeft: "155px",
          marginTop: "17px",
          color: "#000000",
        }}
      >
        Digital marketing <br /> agency on a <br />
        mission
      </h2>
      <button
        style={{
          background: "red",
          marginTop: "22px",
          marginLeft: "155px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          textAlign: "center",
          height: "35px",
          width: "107px",
          border: "2px none red",
        }}
      >
        Explor More
      </button>
    </CardContent>
  </React.Fragment>
);
const Page6 = () => {
  return (
    <Paper elevation={0} className="explor">
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>{card}</div>
        <div style={{ width: "60%" }}>
          <Paper
            elevation={4}
            style={{
              height: "230px",
              width: "241px",
              marginTop: "43px",
              marginLeft: "370px",
            }}
          >
            <img
              src={image29}
              alt="image"
              style={{ marginTop: "28px", marginLeft: "80px", width: "75px" }}
            />
            <h2 className="text" style={{ textAlign: "center" }}>
              {" "}
              Content Strategy & Marketing
            </h2>
          </Paper>
          <Paper
            elevation={4}
            style={{
              height: "230px",
              width: "241px",
              marginTop: "-103px",
              marginLeft: "99px",
            }}
          >
            <img
              src={image15}
              alt="image"
              style={{ marginTop: "28px", marginLeft: "83px", width: "75px" }}
            />
            <h2 className="text" style={{ textAlign: "center" }}>
              {" "}
              Search Engine Marketing
            </h2>
          </Paper>
          <Paper
            elevation={4}
            style={{
              height: "230px",
              width: "241px",
              marginTop: "26px",
              marginLeft: "99px",
            }}
          >
            <img
              src={image27}
              alt="image"
              style={{ marginTop: "28px", marginLeft: "80px", width: "75px" }}
            />
            <h2 className="text" style={{ textAlign: "center" }}>
              {" "}
              Reporting Analysis ROI
            </h2>
          </Paper>
          <Paper
            elevation={4}
            style={{
              height: "230px",
              width: "241px",
              marginTop: "-345px",
              marginLeft: "370px",
            }}
          >
            <img
              src={image16}
              alt="image"
              style={{ marginTop: "28px", marginLeft: "80px", width: "75px" }}
            />
            <h2 className="text" style={{ textAlign: "center" }}>
              {" "}
              Search Engine Optimization
            </h2>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default Page6;
