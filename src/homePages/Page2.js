import { CardContent, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const card1 = (
  <React.Fragment>
    <CardContent>
      <img src="../asset/image15.png" />
      <Typography className="text" variant="h5">
        Search Engine Marketing
      </Typography>
      <Typography className="text" variant="h6" component="div">
        Let us put your website in front of consumers at the moment in time they
        are searching for your products & services.
      </Typography>
    </CardContent>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
    <CardContent>
      <img src="../asset/image16.png" />
      <Typography className="text" variant="h5">
        Search Engine Optimization
      </Typography>
      <Typography className="text" variant="h6" component="div">
        Working together, we will use our knowledge of SEO to bring more leads
        to your business through your website.
      </Typography>
    </CardContent>
  </React.Fragment>
);
const card3 = (
  <React.Fragment>
    <CardContent>
      <img src="../asset/image17.png" />
      <Typography className="text" variant="h5">
        Reporting Analysis ROI
      </Typography>
      <Typography className="text" variant="h6" component="div">
        The same way review and analyze your job reports by cost, ROI, customer
        satisfaction and much more
      </Typography>
    </CardContent>
  </React.Fragment>
);
const Page2 = () => {
  const [active, setactive] = useState(2);
  return (
    <div
      style={{
        height: "326px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "55px",
          marginRight: "15px",
          marginLeft: "15px",
        }}
      >
        <div onClick={() => setactive(1)} style={{ cursor: "pointer" }}>
          {active == 1 ? (
            <Paper elevation={2}> {card1}</Paper>
          ) : (
            <Paper elevation={0}> {card1}</Paper>
          )}
        </div>
        <div onClick={() => setactive(1)} style={{ cursor: "pointer" }}>
          {active == 2 ? (
            <Paper elevation={2}> {card2}</Paper>
          ) : (
            <Paper elevation={0}> {card2}</Paper>
          )}
        </div>
        <div onClick={() => setactive(1)} style={{ cursor: "pointer" }}>
          {active == 3 ? (
            <Paper elevation={2}> {card3}</Paper>
          ) : (
            <Paper elevation={0}> {card3}</Paper>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Page2;
