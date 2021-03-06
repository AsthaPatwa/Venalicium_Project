import React from "react";
import image26 from "../asset/image26.png";
import "../CSS/Page9.css";
import shape1 from "../asset/problem-shap.png";

const Page9 = () => {
  return (
    <>
      <div style={{ display: "flex", marginLeft: "120px"}}>
        <div>
          <img src={image26} alt="image" />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: "3%" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <h1 style={{ fontWeight: "bold", fontSize: "41px" }}>
                Got a Problem
              </h1>
              <p style={{ marginTop: "25px", color: "grey", fontSize: "15px" }}>
                Before we put our thinking caps on, tell us few things <br />
                about yourself{" "}
              </p>
            </div>
            <div>
              <img
                alt="shape_image"
                src={shape1}
                style={{ marginLeft: "19%" }}
              />
            </div>
          </div>
          <div className="forms">
            <div style={{ display: "flex", margin: "4% 0", gap: "2%" }}>
              <input
                type="text"
                style={{
                  height: "35px",
                  width: "40%",
                  padding: "2% 3%",
                  border: "1px solid rgba(230, 138, 191,0.2)",
                }}
                placeholder="Name *"
              ></input>
              <input
                type="text"
                style={{
                  height: "35px",
                  width: "40%",
                  padding: "2% 3%",
                  marginRight: "-3%",
                  border: "1px solid  rgba(230, 138, 191,0.2)",
                }}
                placeholder="Email *"
              ></input>
            </div>
            <textarea
              type="text"
              style={{
                height: "137px",
                width: "90%",
                padding: "2% 2%",
                border: "1px solid rgba(230, 138, 191,0.2)",
              }}
              placeholder="Message *"
            ></textarea>
          </div>
          <div className="send-btn">
            <button>Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page9;
{
  /* <div style={{ display: "flex" }}>
  <div>
    <img src={image26} alt="pic"></img>
  </div>
  <div style={{ display: "flex", width: "60%" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Got a Problem</h1>
      <p>
        Before we put our thinking caps on, tell us few things <br />
        about yourself{" "}
      </p>
      <div className="forms">
        <div style={{ display: "flex", margin: "5% 0", gap: "2%" }}>
          <input
            type="text"
            style={{
              width: "50%",
              padding: "5% 2%",
              border: "1px solid rgba(230, 138, 191,0.2)",
            }}
            placeholder="Name *"
          ></input>
          <input
            type="text"
            style={{
              width: "50%",
              padding: "5% 2%",
              marginRight: "-3%",
              border: "1px solid  rgba(230, 138, 191,0.2)",
            }}
            placeholder="Email *"
          ></input>
        </div>
        <textarea
          type="text"
          style={{
            height: "107px",
            width: "100%",
            padding: "5% 2%",
            border: "1px solid rgba(230, 138, 191,0.2)",
          }}
          placeholder="Message *"
        ></textarea>
      </div>
      <div className="send-btn">
        <button>Send</button>
      </div>
    </div>
    <div style={{ width: "40%" }}>
      <img alt="shape_image" src={shape1} />
    </div>
  </div>
</div>; */
}
