import { CardContent, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import image15 from "../asset/image15.png";
import image16 from "../asset/image16.png";
import image17 from "../asset/image17.png";
import "../CSS/Home.css";

const card1 = (
  <React.Fragment>
    <CardContent>
      <img
        src={image15}
        alt="img"
        style={{ width: "45%", marginBottom: "5%", marginTop: "7%" }}
      />
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "25px",
          marginTop: "22px",
        }}
      >
        Search Engine Marketing
      </Typography>
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          fontSize: "15px",
          marginTop: "26px",
        }}
      >
        Let us put your website in front of consumers at the moment in time they
        are searching for your products & services.
      </Typography>
    </CardContent>
  </React.Fragment>
);
const card2 = (
  <React.Fragment>
    <CardContent>
      <img
        src={image16}
        alt="img"
        style={{ width: "45%", marginBottom: "5%", marginTop: "7%" }}
      />
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "25px",
          marginTop: "22px",
        }}
      >
        Search Engine Optimization
      </Typography>
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          fontSize: "15px",
          marginTop: "26px",
        }}
      >
        Working together, we will use our knowledge of SEO to bring more leads
        to your business through your website.
      </Typography>
    </CardContent>
  </React.Fragment>
);
const card3 = (
  <React.Fragment>
    <CardContent>
      <img
        src={image17}
        alt="img"
        style={{ width: "45%", marginBottom: "5%", marginTop: "7%" }}
      />
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "25px",
          marginTop: "22px",
        }}
      >
        Reporting Analysis ROI
      </Typography>
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          fontSize: "15px",
          marginTop: "26px",
        }}
      >
        The same way review and analyze your job reports by cost, ROI, customer
        satisfaction and much more
      </Typography>
    </CardContent>
  </React.Fragment>
);
const Page2 = () => {
  const [active, setActive] = useState(2);
  return (
    <div
      style={{
        height: "536px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "55px",
        }}
      >
        <div
          onClick={() => setActive(1)}
          style={{
            cursor: "pointer",
            height: "370px",
            width: "245px",
            marginTop: "101px",
          }}
        >
          {active === 1 ? (
            <Paper elevation={3}> {card1}</Paper>
          ) : (
            <Paper elevation={0}> {card1}</Paper>
          )}
        </div>
        <div
          onClick={() => setActive(2)}
          style={{
            cursor: "pointer",
            height: "370px",
            width: "270px",
            marginTop: "101px",
            marginLeft: "-2%",
          }}
        >
          {active === 2 ? (
            <Paper elevation={3}> {card2}</Paper>
          ) : (
            <Paper elevation={0}> {card2}</Paper>
          )}
        </div>
        <div
          onClick={() => setActive(3)}
          style={{
            cursor: "pointer",
            height: "370px",
            width: "270px",
            marginTop: "101px",
            marginLeft: "-2%",
          }}
        >
          {active === 3 ? (
            <Paper elevation={3}> {card3}</Paper>
          ) : (
            <Paper elevation={0}> {card3}</Paper>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Page2;
