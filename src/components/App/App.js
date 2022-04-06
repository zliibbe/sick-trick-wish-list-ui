import React, { Component } from 'react';
import './App.css';
import TrickContainer from './TrickContainer';
// import tricksData from './tricksData'


class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(data => data.json())
    .then(data => {
      this.setState({
        tricks: data
      })
    })
    .catch(error => console.log("error&:", error))
  }
  
  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        {/* Form */}
        <TrickContainer Tricks={this.state.tricks}/>
        {/* Tricks */}
      </main>

    );
  }
}

export default App;