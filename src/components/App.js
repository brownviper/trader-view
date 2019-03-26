import React from 'react';

import '../assets/App.css';

import NewTrader from './NewTrader';
import TradersTable from './TradersTable';
import StockTable from './StockTable';

const App = () => (
  <div className="App">
    <NewTrader />
    <TradersTable />
    <StockTable />
  </div>
);

export default App;
