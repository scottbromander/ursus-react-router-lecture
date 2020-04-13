import React, { Component } from "react";
import AnimalButton from "../AnimalButton/AnimalButton";
import PlantsButton from "../PlantsButton/PlantsButton";
import BackButton from "../BackButton/BackButton";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <AnimalButton />
        <PlantsButton />
        <BackButton />
      </div>
    );
  }
}

export default Home;
