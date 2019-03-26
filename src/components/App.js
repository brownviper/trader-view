import React, { Component } from 'react';
import logo from '../logo.svg';
import '../assets/App.css';
import NewTrader from './NewTrader';
import TradersTable from './TradersTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewTrader />
        <TradersTable />
      </div>
    );
  }
}

export default App;
