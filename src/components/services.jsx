import React, { Component } from "react";
import prayer from "../images/jumuah.jpg";
import quran from "../images/quran.jpg";
import classPic from "../images/class.jpg";
import study from "../images/study.jpg";

class Services extends Component {
  state = {
    activities: [
      {
        img: prayer,
        paragraph:
          "Friday Prayers are offered on campus, right at the University Center Prayer Room! Due to sizeable size of available khutbah readers, we offer two prayer times: 1:30 PM and 2:30 PM. We would always appreciate any volunteers to give khutbah, so if you are interested, you can fill this form. Remember, you don't have to be an expert jurist. All of our readers are students like you!",
      },
      {
        img: quran,
        paragraph:
          "Every Friday evening, we offer halaqa at the Prayer Room. In addition to reading the Quran and hadith, we plan to increase the scope of discussion to include the sahaba, the works of the ulama, as well as modern Muslim thinkers like Alija Izetbegovic. New ideas are always welcome!",
      },
      {
        img: classPic,
        paragraph:
          "Want to give khutbah but nervous about the process? Don't worry, as our experienced readers will be offering workshops to help you fully understand the steps required in giving a khutbah. Even if you aren't sure of giving a khutbah but are still curious, please come!",
      },
      {
        img: study,
        paragraph:
          "MSA is pleased to be hosting study hours. In addition to being a comfortable place to study, it is also a great opportunity to interact with brothers and sisters. Even if you don't have any midterms coming up, please come join if you are free!",
      },
    ],
  };

  displayImages = () => {
    let list = this.state.activities.map((c) => (
      <div
        id="resources"
        className="row"
        style={{
          margin: "30px",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <div className="col">
          <img
            className="img-fluid rounded-circle mx-auto figure-img"
            src={c.img}
            style={{
              height: "150px",
              width: "auto",
              display: "block",
            }}
          ></img>
        </div>
        <div
          className="col-8"
          style={{ alignItems: "center", display: "flex" }}
        >
          {c.paragraph}
        </div>
      </div>
    ));
    return list;
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "#5cb85c" }}>Our Services</h1>
        {this.displayImages()}
      </div>
    );
  }
}

export default Services;
