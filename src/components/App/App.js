import React, { Component } from "react";
import "./App.css";
import TrickContainer from "../TrickContainer";
import Form from "../Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    };
  }

  submitTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] });
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/tricks")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          tricks: data,
        });
      })
      .catch((error) => console.log("###error:", error));
  }

  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <Form submitTrick={this.submitTrick} />
        <TrickContainer Tricks={this.state.tricks} />
      </main>
    );
  }
}

export default App;
