import React from 'react';
import ReactDOM from 'react-dom';
import TradesTable from './TradesTable'

xit('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradesTable />, div);
    ReactDOM.unmountComponentAtNode(div);
});
