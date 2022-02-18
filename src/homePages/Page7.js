import { Paper, Typography } from "@mui/material";
import React from "react";
import image from "../asset/image.png";
import user1 from "../asset/user1.png";
import "../CSS/Home.css";

const Page7 = () => {
  return (
    <Paper elevation={0} style={{ height: "750px", marginTop: "15px" }}>
      <div style={{ textAlign: "center" }}>
        <a
          href="#"
          style={{ textAlign: "center", color: "#a058e8", marginTop: "25px" }}
        >
          Testimonial
        </a>
        <Typography
          variant="h3"
          style={{ marginTop: "26px", fontWeight: "bold" }}
        >
          Hear What Others Are saying
        </Typography>
        <div className="hr">
          <hr style={{ width: "80px", backgroundColor: "#a058e8" }} />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "20%" }}>
            <img alt="image" src={image} style={{ marginLeft: "209px" }} />
          </div>

          <Typography
            variant="h6"
            style={{
              textAlign: "center",
              width: "80%",
              marginRight: "85px",
              marginTop: "69px",
            }}
          >
            Since we began our partnership with Restoration Digital Marketing,
            our web traffic <br /> has increased tremendously.This has led to
            increased phone calls, that are legitimate <br /> leads, which has
            equaled increased revenue.Jeff has been great to work with ans is{" "}
            <br /> extremely helpful and knowledgeable.
          </Typography>
        </div>
        <div style={{ marginTop: "55px" }}>
          <img alt="user_image" src={user1} style={{ width: "105px" }} />
        </div>
        <div className="hr" style={{ display: "flex" }}>
          <hr style={{ width: "30px", backgroundColor: "red" }} />
          <hr style={{ width: "30px", marginLeft: "12px" }} />
          <hr style={{ width: "30px", marginLeft: "12px" }} />
        </div>
      </div>
    </Paper>
  );
};

export default Page7;
