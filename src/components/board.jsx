import React, { Component } from "react";
import aidan from "../images/aidan.jpg";
import mansour from "../images/mansour.jpg";
import cuneyd from "../images/cuneyd.jpg";
import azaan from "../images/azaan.jpg";

class Board extends Component {
  state = {
    names: [
      { name: "Aidan Place", pic: aidan, capt: "President" },
      { name: "Mansour Elsharawy", pic: mansour, capt: "Vice President" },
      { name: "Cuneyd Tasoglu", pic: cuneyd, capt: "Secretary" },
      { name: "Azaan Rehman", pic: azaan, capt: "Treasurer" },
    ],
  };

  displayMembers = () => {
    let names = this.state.names.map((c) => (
      <div className="col mx-1" style={{ textAlign: "center" }}>
        <img
          className="img-fluid rounded-circle mx-auto figure-img"
          src={c.pic}
          style={{
            height: "200px",
            width: "auto",
            display: "block",
          }}
        ></img>
        <figcaption
          style={{
            textAlign: "center",
            width: "100%",
            display: "inline-block",
          }}
        >
          <strong>{c.capt}</strong>
          <br /> {c.name}
        </figcaption>
      </div>
    ));
    return names;
  };

  render() {
    return (
      <div
        id="board"
        className="container-flex about shadow p-3 mb-5 bg-white"
        style={{
          margin: "auto",
          marginTop: "50px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <h1
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "50px",
              color: "#5cb85c",
            }}
          >
            Our Board
          </h1>
          <div className="row" style={{ width: "100%" }}>
            {this.displayMembers()}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
