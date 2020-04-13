import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BackButton extends Component {
  handleClick = () => {
    console.log(this.props);
    this.props.history.goBack();
  };

  render() {
    return <button onClick={this.handleClick}>Go Back!</button>;
  }
}

export default withRouter(BackButton);
