import React from 'react';
import ReactDOM from 'react-dom';
import TradersTable from './TradersTable'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradersTable />, div);
    ReactDOM.unmountComponentAtNode(div);
});
