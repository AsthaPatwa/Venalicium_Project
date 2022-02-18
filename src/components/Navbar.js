import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import image12 from "../asset/image12.png";

const Navbar = () => {
  return (
    <Paper elevation={12}>
      <div className="nav">
        <img
          src={image12}
          alt="image"
          style={{ marginLeft: "140px", width: "84px" }}
        />
        <div className="navbutton">
          <ul>
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>Campaign</button>
            </li>
            <li>
              <Link to="/contact">
                <button
                  style={{
                    height: "45px",
                    width: "166px",
                    background: "#7378F1",
                    borderRadius: "33.5px",
                    color: "#FFFFFF",
                    textAlign: "center",
                    cursor: "pointer",
                    border: "2px none #7378F1",
                    marginRight: "105px",
                  }}
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Paper>
  );
};

export default Navbar;
