import React, { Component } from "react";
import kaaba from "../images/kaaba.jpg";
import fence from "../images/fence.jpg";
import fundraiser from "../images/fundraiser.jpg";
import ali from "../images/ali.jpg";
import gatherPic from "../images/gatherPic1.jpg";
import selimiye from "../images/mosque.jpg";

class Carousel extends Component {
  state = {
    pictures: [
      { alt: "Kaaba", pic: kaaba, class: "carousel-item active" },
      { alt: "Selimiye", pic: selimiye, class: "carousel-item" },
      { alt: "Fence", pic: fence, class: "carousel-item" },
      { alt: "Fundraiser", pic: fundraiser, class: "carousel-item" },
      { alt: "Ali", pic: ali, class: "carousel-item" },
      { alt: "Gathering", pic: gatherPic, class: "carousel-item" },
    ],
  };

  createPics = () => {
    let carouselItems = this.state.pictures.map((p) => (
      <div
        className={p.class}
        style={{
          transition: "ease",
          transitionDuration: "4s",
          pause: "8s",
          position: "relative",
        }}
      >
        <img className="d-block w-100" src={p.pic} alt={p.alt} />
      </div>
    ));

    return carouselItems;
  };

  changeColor = (e) => {
    if (String(e.target.className).endsWith("clicked")) {
      e.target.style.color = "white";
      let idx = e.target.className.lastIndexOf(" ");
      let newClass = String(e.target.className).substring(0, idx);
      e.target.setAttribute("class", newClass);
    } else {
      e.target.style.color = "green";
      let newClass = String(e.target.className) + " clicked";
      e.target.setAttribute("class", newClass);
    }
  };

  createLeftIcon = () => {
    return (
      <a
        className="carousel-control-prev"
        href="#carouselExample"
        role="button"
        data-slide="prev"
        onMouseEnter={this.changeColor}
        onMouseLeave={this.changeColor}
        style={{ opacity: "1" }}
      >
        <span>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-left-circle-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"
            />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </a>
    );
  };

  createRightIcon = () => {
    return (
      <a
        className="carousel-control-next"
        href="#carouselExample"
        role="button"
        data-slide="next"
        onMouseEnter={this.changeColor}
        onMouseLeave={this.changeColor}
        style={{ opacity: "1" }}
      >
        <span>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right-circle-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"
            />
          </svg>
        </span>
        <span className="sr-only">Next</span>
      </a>
    );
  };

  render() {
    return (
      <div
        id="carouselExample"
        style={{
          width: "800px",
          height: "450px",
          margin: "auto",
          border: "5px solid black",
        }}
        className="carousel slide"
        data-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {this.createPics()}
        </div>
        {this.createLeftIcon()}

        {this.createRightIcon()}
      </div>
    );
  }
}

export default Carousel;
