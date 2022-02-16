import { CardContent, Paper } from "@mui/material";
import React from "react";
import image from "../asset/image1.png";
import images from "../asset/images.png";
import map from "../asset/map.png";

const card1 = (
  <React.Fragment>
    <CardContent>
      <img
        src={image}
        alt="image"
        style={{ width: "80px", marginLeft: "39px", marginTop: "40px" }}
      />
      <h3 className="text" style={{ fontWeight: "bold", textAlign: "center" }}>
        Email address
      </h3>
      <p className="text" style={{ textAlign: "center" }}>
        rstu@yoursite.com <br /> hrip24@rstu.com
      </p>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <img
        src={images}
        alt="image"
        style={{ width: "80px", marginLeft: "39px", marginTop: "40px" }}
      />
      <h3 className="text" style={{ fontWeight: "bold", textAlign: "center" }}>
        office Location
      </h3>
      <p className="text" style={{ textAlign: "center", fontSize: "15px" }}>
        62 Arlington St. Suite 100 Boston, CA 01117, USA
      </p>
    </CardContent>
  </React.Fragment>
);
const Cpage3 = () => {
  return (
    <Paper elevation={3}>
      <div style={{ display: "flex", height: "500px" }}>
        <Paper
          elevation={4}
          style={{
            height: "300px",
            marginTop: "95px",
            marginLeft: "148px",
            width: "190px",
          }}
        >
          {card1}
        </Paper>
        <Paper
          elevation={4}
          style={{
            height: "300px",
            marginTop: "95px",
            marginLeft: "35px",
            width: "190px",
          }}
        >
          {card2}
        </Paper>
        <img
          src={map}
          alt="map_image"
          style={{ height: "300px", marginTop: "95px", marginLeft: "35px" }}
        />
      </div>
    </Paper>
  );
};

export default Cpage3;
