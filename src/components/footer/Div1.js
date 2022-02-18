import { FormControl } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

const Div1 = () => {
  return (
    <>
      <div className="div1">
        <div>
          <h3>THINK OUT OF THE BOX</h3>
        </div>

        <div>
          <p>
            Join 350,000 fellow marketers to receive a summary of the latest
            marketing tips from across the world directly to your inbox once a
            week.
          </p>
        </div>

        <div className="form">
          <form>
            <div className="email">
              <EmailIcon
                style={{
                  marginTop: "12px",
                  marginLeft: "9px",
                }}
              />
              <input type="text" placeholder="Email"></input>
            </div>
            <div className="name">
              <PersonIcon
                style={{
                  marginTop: "12px",
                  marginLeft: "9px",
                }}
              />
              <input type="text" placeholder="Your Name"></input>
            </div>
            <div className="name">
              <PersonIcon
                style={{
                  marginTop: "12px",
                  marginLeft: "9px",
                }}
              />
              <input type="text" placeholder="Company Name"></input>
            </div>
          </form>
        </div>
        <div className="submit-btn">
          <button>Submit</button>
        </div>

        <div className="social-icons">
          <FacebookRoundedIcon />
          <TwitterIcon style={{ marginLeft: "6%" }} />
          <LinkedInIcon style={{ marginLeft: "6%" }} />
        </div>
      </div>
    </>
  );
};

export default Div1;
