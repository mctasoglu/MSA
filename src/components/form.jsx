import React, { Component } from "react";
import "../styles/form.css";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateName(name) {
  var re = /[A-Z][a-z]+(\s|,)[A-Z][a-z]{1,19}/;
  return re.test(name);
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();

    if (e.target.id == "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.id == "email") {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ message: e.target.value });
    }
  };

  handleSubmit = () => {
    let templateId = "template_k47W26SJ";

    if (!validateName(this.state.name)) {
      alert("Please enter your full name");
      return;
    }
    if (!validateEmail(this.state.email)) {
      alert("Please enter a valid email");
      return;
    }
    if (String(this.state.message).length < 20) {
      alert("Please write at least a 20 character message");
      return;
    }

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(() => {
        window.location.reload();
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    return (
      <div
        id="form"
        className="Form"
        style={{
          margin: "25px",
          justifyContent: "center",
          width: "80vw",
          margin: "auto",
          minWidth: "600px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#5cb85c",
          }}
        >
          Contact Us!
        </h1>
        <form>
          <div
            className="form-row"
            style={{
              marginBottom: "25px",
              justifyContent: "center",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <div
              className="col"
              style={{
                maxWidth: "492px",
                marginRight: "20px",
                display: "inline-block",
              }}
            >
              <label for="inputName" required>
                First and Last Name
              </label>
              <input
                type="text"
                name="name"
                className="form-input"
                id="name"
                placeholder="Umar ibn al-Khattab"
                onChange={this.handleChange}
                style={{ border: "2px solid-black" }}
              />
            </div>
            <div className="col" style={{ maxWidth: "492px" }}>
              <label for="inputEmail">Email Address</label>
              <input
                type="text"
                className="form-input"
                id="email"
                placeholder="user@gmail.com"
                name="email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row" style={{ margin: "20px" }}>
            <div className="col">
              <label for="inputMessage">Message</label>
              <textarea
                class="form-input"
                id="message"
                placeholder="Enter message here"
                style={{ height: "200px" }}
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-success"
            value="Submit"
            style={{ margin: "auto", display: "flex" }}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
