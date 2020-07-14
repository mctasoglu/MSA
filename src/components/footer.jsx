import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="container-flex" style={{ minWidth: "600px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            height: "50px",
            backgroundColor: "#28a745",
          }}
        >
          <div
            style={{
              color: "white",
              margin: "auto",
              font: "15px Arial",
              lineHeight: "50px",
              display: "inline-block",
            }}
          >
            Made by Cuneyd Tasoglu
          </div>
          <a
            href="https://www.facebook.com/msaatcmu/"
            style={{
              margin: "auto",

              fontSize: "30px",
              display: "inline-block",
              position: "absolute",
              right: "3%",
            }}
          >
            <i class="fa fa-facebook" style={{ color: "#4267B2" }}></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
