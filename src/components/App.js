import React, { Component } from 'react';
import logo from '../logo.svg';
import '../assets/App.css';
import NewTrader from './NewTrader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewTrader />
      </div>
    );
  }
}

export default App;
