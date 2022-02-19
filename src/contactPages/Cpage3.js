import { CardContent, Paper, Typography } from "@mui/material";
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
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", textAlign: "center", marginTop: "15px" }}
      >
        Email address
      </Typography>
      <Typography style={{ textAlign: "center", marginTop: "18px" }}>
        rstu@yoursite.com <br /> hrip24@rstu.com
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <img
        src={images}
        alt="image"
        style={{ width: "82px", marginLeft: "39px", marginTop: "40px" }}
      />
      <Typography
        variant="h5"
        style={{ fontWeight: "bold", textAlign: "center", marginTop: "15px" }}
      >
        office Location
      </Typography>
      <Typography
        style={{ textAlign: "center", fontSize: "15px", marginTop: "18px" }}
      >
        62 Arlington St. Suite 100 Boston, CA 01117, USA
      </Typography>
    </CardContent>
  </React.Fragment>
);
const Cpage3 = () => {
  return (
    <Paper elevation={0}>
      <div style={{ display: "flex", height: "500px" }}>
        <Paper
          elevation={4}
          style={{
            height: "300px",
            marginTop: "95px",
            marginLeft: "248px",
            width: "205px",
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
            width: "285px",
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
