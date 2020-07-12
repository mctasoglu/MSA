import React, { Component } from "react";
import "../styles/form.css";

class Form extends Component {
  state = {};

  render() {
    return (
      <div
        className="Form"
        style={{
          margin: "25px",
          justifyContent: "center",
          width: "860px",
          margin: "auto",
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
        <form action="mailForm.php">
          <div
            className="form-row"
            style={{ marginBottom: "25px", justifyContent: "center" }}
          >
            <div
              className="col"
              style={{
                maxWidth: "400px",
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
                placeholder="Umar ibn al-Khattab"
                style={{ border: "2px solid-black" }}
              />
            </div>
            <div className="col" style={{ maxWidth: "400px" }}>
              <label for="inputEmail" required>
                Email Address
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="user@gmail.com"
                name="email"
              />
            </div>
          </div>
          <div className="form-row" style={{ margin: "20px" }}>
            <div className="col">
              <label for="inputMessage" required>
                Message
              </label>
              <textarea
                class="form-input"
                name="msg"
                id="exampleFormControlTextarea1"
                placeholder="Enter message here"
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            name="submit"
            value="Submit"
            class="btn btn-success"
            style={{ margin: "auto", display: "flex" }}
          />
        </form>
      </div>
    );
  }
}

export default Form;
