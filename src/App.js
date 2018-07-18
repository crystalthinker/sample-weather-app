import React, { Component } from 'react';
import './App.css';
import Weather from "./components/weather/weather.component";

class App extends Component {
  render() {
    return (
      <div className="App Container">
        <header className="App-header">
          <h1 className="App-title">Welcome to Weather app</h1>
        </header>
        <Weather/>
      </div>
    );
  }
}

export default App;
