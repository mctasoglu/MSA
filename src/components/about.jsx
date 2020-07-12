import React, { Component } from "react";
import basmala from "../images/basmala.png";
import "../styles/about.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      translation: "In the name of Allah, the Most Gracious, the Most Merciful",
      count: 0,
      id: null,
      targetArr: [],
      missionStatement:
        "The Carnegie Mellon Muslim Student Association's mission is to serve the needs\n of the Muslim community and foster a comfortable environment on campus. By\n following God's commands and our dear Prophet's examples, we aim to function\n as a model student organization that promotes human rights, forges alliances\n with other student organizations, and nurtures a deeper understanding of Islam.",
    };
  }

  displayTranslation = () => {
    setTimeout(() => {
      this.setState({
        isVisible: true,
      });
    }, 500);

    this.setState({ id: setInterval(this.displayLines, 1500) });
  };

  displayLines = () => {
    let lines = this.state.missionStatement.split("\n");
    if (this.state.count < lines.length) {
      let currLine = lines[this.state.count];
      this.setState({
        targetArr: Array(this.state.targetArr) + [currLine],
      });
      this.setState({ count: this.state.count + 1 });
    } else {
      this.setState({ id: clearInterval(this.state.id) });
    }
  };

  displayContent = () => {
    return (
      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          type="button"
          className="btn"
          onClick={this.displayTranslation}
          style={{
            marginBottom: "20px",
            position: "relative",
          }}
        >
          <img
            className="basmala"
            src={basmala}
            style={{
              width: "800px",
              height: "auto",
            }}
          ></img>
        </button>
        <div
          className="about-text"
          style={{ position: "relative", textAlign: "center" }}
        >
          <h1
            className={
              this.state.isVisible ? "translation-shown" : "translation-hidden"
            }
          >
            {this.state.translation}
          </h1>
          <div
            className="lines"
            style={{
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <h5>{this.state.targetArr}</h5>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        id="mission"
        className="container-flex about shadow p-3 mb-5 bg-white"
        style={{
          margin: "auto",
          marginTop: "50px",
          height: "450px",

          display: "flex",
        }}
      >
        {this.displayContent()}
      </div>
    );
  }
}

export default About;
