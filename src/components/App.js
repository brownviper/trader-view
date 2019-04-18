import React from 'react';

import '../assets/App.css';

import NewTrade from './NewTrade';
import TradesTable from './TradesTable';
import StockTable from './StockTable';

const App = () => (
  <div className="App">
    <NewTrade />
    <TradesTable />
    <StockTable />
  </div>
);

export default App;
