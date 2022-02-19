import { Paper, Typography } from "@mui/material";
import React from "react";
import "../CSS/Contact.css";
import user from "../asset/user.png";
import image from "../asset/problem-shap.png";

const Cpage2 = () => {
  return (
    <Paper elevation={0}>
      <div className="send">
        <div style={{ height: "150px", display: "flex" }}>
          <div
            style={{
              width: "50%",
              color: "#000000",
              marginLeft: "207px",
            }}
          >
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginTop: "93px",
              }}
            >
              {" "}
              Get in Touch{" "}
            </Typography>
            <Typography
              style={{
                fontSize: "15px",
              }}
            >
              Before we put our thinking caps on, tell us a few things <br />{" "}
              about yourself
            </Typography>
            <div
              style={{
                display: "flex",
                marginTop: "25px",
                margin: "3% 0",
                gap: "2%",
              }}
            >
              <input
                type="text"
                placeholder="Name*"
                style={{
                  backgroundColor: "rgba(222, 155, 207,0.0)",
                  border: "1px solid rgba(230, 138, 191,0.2)",
                  width: "30%",
                  padding: "2% 3%",
                }}
              />
              <input
                type="text"
                placeholder="Email*"
                style={{
                  padding: "2% 3%",
                  backgroundColor: "rgba(222, 155, 207,0.0)",
                  border: "1px solid rgba(230, 138, 191,0.2)",
                  width: "35%",
                }}
              />
            </div>
            <textarea
              type="text"
              placeholder="Message*"
              style={{
                width: "75%",
                padding: "2% 2%",
                height: "137px",
                backgroundColor: "rgba(222, 155, 207,0.0)",
                border: "1px solid rgba(230, 138, 191,0.2)",
              }}
            />
            <br />
            <button
              style={{
                fontSize: "23px",
                background: "red",
                marginTop: "67px",
                color: "#FFFFFF",
                borderRadius: "33.5px",
                textAlign: "center",
                height: "35px",
                width: "98px",
                cursor: "pointer",
                border: "5px none red ",
              }}
            >
              Send
            </button>
          </div>
          <div style={{ width: "50%" }}>
            <img src={image} alt="image" />
            <Typography
              variant="h4"
              style={{
                marginTop: "26px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Quick calls?
            </Typography>
            <div style={{ display: "flex", marginTop: "25px" }}>
              <img alt="image" src={user} style={{ width: "59px" }} />
              <Typography
                style={{
                  fontSize: "21px",
                  marginLeft: "21px",
                  marginTop: "15px",
                }}
              >
                Emran Khan
              </Typography>
            </div>
            <Typography
              style={{
                marginTop: "12px",
                fontSize: "12px",
                color: "grey",
              }}
            >
              Want to get hired r want to hire us? type away <br /> below.
              Schedule a short introductory call
            </Typography>
            <button
              className="text"
              style={{
                height: "30px",
                width: "144px",
                textAlign: "center",
                marginTop: "16px",
                background: "#8c44e3",
                borderRadius: "6px",
                color: "#FFFFFF",
                cursor: "pointer",
                border: "5px none #8c44e3 ",
              }}
            >
              Contact @ghostriad
            </button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Cpage2;
