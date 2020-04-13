import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PlantsButton extends Component {
  handleClick = () => {
    this.props.history.push("/plants");
  };

  render() {
    return <button onClick={this.handleClick}>Go to Plants!</button>;
  }
}

export default withRouter(PlantsButton);
