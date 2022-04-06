import React, { Component } from 'react';
import './App.css';
import TrickContainer from './TrickContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks:[]
    }
  }
  
  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        {/* Form */}
        <TrickContainer />
        {/* Tricks */}
      </main>

    );
  }
}

export default App;