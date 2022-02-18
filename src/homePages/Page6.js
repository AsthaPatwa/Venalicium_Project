import { Button, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import image1 from "../asset/Mask_Group.png";
import image2 from "../asset/Mask_Group1.png";
import image3 from "../asset/Mask_Group2.png";
import image4 from "../asset/Mask_Group3.png";
import "../CSS/Home.css";

const card = (
  <React.Fragment>
    <CardContent>
      <a
        href="#"
        style={{
          fontWeight: "12px",
          marginTop: "16px",
          marginLeft: "155px",
          color: "#a058e8",
        }}
      >
        What we do
      </a>
      <Typography
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
      </Typography>
      <button
        style={{
          fontSize: "20px",
          background: "red",
          marginTop: "22px",
          marginLeft: "155px",
          color: "#FFFFFF",
          borderRadius: "33.5px",
          textAlign: "center",
          height: "45px",
          width: "175px",
          border: "2px none red",
          cursor: "pointer",
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
        <div style={{ width: "40%", marginTop: "302px" }}>{card}</div>
        <div style={{ width: "60%" }}>
          <Paper
            elevation={4}
            style={{
              height: "240px",
              width: "251px",
              marginTop: "43px",
              marginLeft: "370px",
            }}
          >
            <div
              style={{
                height: "90px",
                width: "90px",
                marginTop: "28px",
                marginLeft: "80px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                borderRadius: "45px",
              }}
            >
              <img
                src={image4}
                alt="image"
                style={{ width: "75px", marginLeft: "8px", marginTop: "8px" }}
              />
            </div>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {" "}
              Content Strategy & Marketing
            </Typography>
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
            <div
              style={{
                height: "90px",
                width: "90px",
                marginTop: "28px",
                marginLeft: "80px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                borderRadius: "45px",
              }}
            >
              <img
                src={image2}
                alt="image"
                style={{ width: "75px", marginLeft: "8px", marginTop: "8px" }}
              />
            </div>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {" "}
              Search Engine Marketing
            </Typography>
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
            <div
              style={{
                height: "90px",
                width: "90px",
                marginTop: "28px",
                marginLeft: "80px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                borderRadius: "45px",
              }}
            >
              <img
                src={image1}
                alt="image"
                style={{ width: "75px", marginLeft: "8px", marginTop: "8px" }}
              />
            </div>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {" "}
              Reporting Analysis ROI
            </Typography>
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
            <div
              style={{
                height: "90px",
                width: "90px",
                marginTop: "28px",
                marginLeft: "80px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                borderRadius: "45px",
              }}
            >
              <img
                src={image3}
                alt="image"
                style={{ width: "75px", marginLeft: "8px", marginTop: "8px" }}
              />
            </div>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "16px",
              }}
            >
              {" "}
              Search Engine Optimization
            </Typography>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default Page6;
