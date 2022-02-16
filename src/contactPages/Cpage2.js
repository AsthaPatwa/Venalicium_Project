import { Paper, Typography } from "@mui/material";
import { height, typography, width } from "@mui/system";
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
            <h1
              className="text"
              style={{
                fontWeight: "bold",
                marginTop: "93px",
              }}
            >
              {" "}
              Get in Touch{" "}
            </h1>
            <p
              className="text"
              style={{
                fontSize: "15px",
              }}
            >
              Before we put our thinking caps on, tell us a few things <br />{" "}
              about yourself
            </p>
            <div
              style={{
                display: "flex",
                marginTop: "25px",
                opacity: "0.4",
              }}
            >
              <input
                type="text"
                placeholder="Name*"
                style={{ border: "2px solid pink" }}
              />
              <input
                type="text"
                placeholder="Email*"
                style={{ marginLeft: "34px", border: "2px solid pink" }}
              />
            </div>
            <textarea
              type="text"
              placeholder="Message*"
              style={{
                marginTop: "20px",
                height: "130px",
                width: "380px",
                opacity: "0.4",
                border: "2px solid pink",
              }}
            />
            <br />
            <button
              style={{
                background: "red",
                marginTop: "45px",
                color: "#FFFFFF",
                borderRadius: "33.5px",
                textAlign: "center",
                height: "30px",
                width: "65px",
                cursor: "pointer",
                border: "5px none red ",
              }}
            >
              Send
            </button>
          </div>
          <div style={{ width: "50%" }}>
            <img src={image} alt="image" />
            <h3
              className="text"
              style={{
                marginTop: "209px",
                fontWeight: "bold",
              }}
            >
              {" "}
              Quick calls?
            </h3>
            <div style={{ display: "flex" }}>
              <img alt="image" src={user} style={{ width: "53px" }} />
              <p
                className="text"
                style={{
                  fontSize: "18px",
                  marginLeft: "21px",
                }}
              >
                Emran Khan
              </p>
            </div>
            <p
              className="text"
              style={{
                marginTop: "12px",
                fontSize: "12px",
                color: "grey",
              }}
            >
              Want to get hired r want to hire us? type away <br /> below.
              Schedule a short introductory call
            </p>
            <button
              className="text"
              style={{
                height: "30px",
                width: "144px",
                textAlign: "center",
                marginTop: "2px",
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
