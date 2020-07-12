import React, { Component } from "react";
import logo from "./images/msaLogo.png";
import "./App.css";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import About from "./components/about";
import Services from "./components/services";
import Board from "./components/board";
import Form from "./components/form";

const style = {
  color: "green",
  font: "20px Arial",
  scrollBehavior: "smooth",
  cursor: "pointer",
};

const logoStyle = {
  height: "auto",
  width: "80%",
  float: "left",
};

const spanStyle = {
  width: "100px",
};

class App extends Component {
  state = {
    navs: [
      { id: "Who-We-Are-Tab", value: "Who We Are", target: "mission" },
      { id: "Services", value: "Services", target: "resources" },
      { id: "Meet-The-Board", value: "Meet the Board", target: "board" },
      { id: "Contact", value: "Contact", target: "#" },
    ],
  };

  makeListItems = () => {
    let listItems = this.state.navs.map((c) => (
      <li className="nav-item" key={c.id}>
        <a
          className="nav-link"
          style={style}
          onClick={() => this.scrollToTarget(c.target)}
        >
          {c.value}
        </a>
      </li>
    ));

    return (
      <React.Fragment>
        <span style={spanStyle}>
          <a href="#" className="">
            <img src={logo} style={logoStyle} alt=""></img>
          </a>
        </span>
        <ul className="navbar-nav">{listItems}</ul>
      </React.Fragment>
    );
  };

  scrollToTarget = (targetID) => {
    let bottom = document.getElementById(targetID);
    bottom.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar makeList={this.makeListItems} />
        <Carousel />
        <About />
        <Services />
        <Board />
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
