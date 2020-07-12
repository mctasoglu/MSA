import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="shadow p-3 mb-5 bg-white">
          <nav className="navbar navbar-expand-lg bg-white justify-content-start">
            {this.props.makeList()}
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
