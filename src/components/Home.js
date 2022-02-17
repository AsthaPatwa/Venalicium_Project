import React from "react";
import Page1 from "../homePages/Page1";
import Page2 from "../homePages/Page2";
import Page3 from "../homePages/Page3";
import Page4 from "../homePages/Page4";
import Page5 from "../homePages/Page5";
import Page6 from "../homePages/Page6";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
};

export default Home;
