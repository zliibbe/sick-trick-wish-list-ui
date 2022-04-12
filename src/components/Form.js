import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        obstacle: "",
        stance: "",
        tutorial: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitTrick = (event) => {
    event.preventDefault();
    const newTrick = {
      ...this.state,
      id: Date.now(),
    };
    console.log('newTrick:',newTrick)
    this.props.submitTrick(newTrick);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: "",
      obstacle: "",
      stance: "",
      tutorial: ""
    });
  };

  render() {
    return (
      <form className="form">
        <select
          id="stance"
          name="stance"
          placeholder="Choose your Stance"
          onChange={(event) => this.handleChange(event)}
        >
          <option value="">Choose your Stance</option>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Name of Trick"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        ></input>

        <select
          name="obstacle"
          placeholder="Choose your Obstacle"
          onChange={(event) => this.handleChange(event)}
        >
          <option value="">Choose your Obstacle</option>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>

        <input
          type="text"
          name="tutorial"
          placeholder="Link to Tutorial"
          value={this.state.tutorial}
          onChange={(event) => this.handleChange(event)}
        ></input>

        <button onClick={event => this.submitTrick(event)}>Send It!</button>
      </form>
    );
  }
}

export default Form;
