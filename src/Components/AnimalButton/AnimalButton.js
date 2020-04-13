import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AnimalButton extends Component {
  handleClick = () => {
    console.log("Hi!");
    this.props.history.push("/animals");
  };

  render() {
    return <button onClick={this.handleClick}>Go to Animals!</button>;
  }
}

export default withRouter(AnimalButton);
