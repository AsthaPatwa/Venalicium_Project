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
                marginTop: "30px",
                opacity: "0.4",
              }}
            >
              <input
                type="text"
                placeholder="Name*"
                style={{ border: "2px solid pink", width: "272px", height: "47px" }}
              />
              <input
                type="text"
                placeholder="Email*"
                style={{ marginLeft: "24px", border: "2px solid pink",  width: "272px", height: "47px" }}
              />
            </div>
            <textarea
              type="text"
              placeholder="Message*"
              style={{
                marginTop: "20px",
                height: "170px",
                width: "572px",
                opacity: "0.4",
                border: "2px solid pink",
              }}
            />
            <br />
            <button
              style={{
                fontSize: "23px",
                background: "red",
                marginTop: "38px",
                color: "#FFFFFF",
                borderRadius: "33.5px",
                textAlign: "center",
                height: "40px",
                width: "103px",
                cursor: "pointer",
                border: "5px none red ",
              }}
            >
              Send
            </button>
          </div>
          <div style={{ width: "50%" }}>
            <img src={image} alt="image" style={{marginLeft: "352px", width: "30%", height: "120%"}} />
            <Typography
              variant="h4"
              style={{
                marginTop: "45px",
                fontWeight: "bold",
                
              }}
            >
              {" "}
              Quick calls?
            </Typography>
            <div style={{ display: "flex" }}>
              <img alt="image" src={user} style={{ width: "68px", marginTop: "32px" }} />
              <Typography
                style={{
                  fontSize: "21px",
                  marginLeft: "21px",
                  marginTop: "50px",
                  fontWeight: "bold"
                }}
              >
                Emran Khan
              </Typography>
            </div>
            <Typography
              style={{
                marginTop: "20px",
                fontSize: "13px",
                color: "black",
              }}
            >
              Want to get hired r want to hire us? type away <br /> below.
              Schedule a short introductory call
            </Typography>
            <button
              className="text"
              style={{
                height: "38px",
                width: "176px",
                textAlign: "center",
                marginTop: "20px",
                background: "#8c44e3",
                borderRadius: "6px",
                color: "#FFFFFF",
                cursor: "pointer",
                border: "5px none #8c44e3 ",
              }}
            >
             <h4> Contact @ghostriad</h4>
            </button>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Cpage2;
