// @flow

import type { Traders, Trader, Id, TimeStamp } from '../types/traders';
import type { Action } from '../types';

const createTrader = (id: Id, symbol: Symbol, price: Price, count: Shares, timeStamp: TimeStamp): Trader => ({
    id,
    symbol,
    price,
    count,
    timeStamp
});

const traders = (state: Traders = [], action: Action): Traders => {
    switch (action.type) {
        case 'ADD_TRADER':
            return [...state, createTrader(action.id, action.symbol, action.price, action.count, action.timeStamp)];
        default:
            return state;
    }
};

export default traders;
