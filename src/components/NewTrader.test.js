import React from 'react';
import ReactDOM from 'react-dom';
import NewTrader from './NewTrader';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewTrader />, div);
    ReactDOM.unmountComponentAtNode(div);
});
