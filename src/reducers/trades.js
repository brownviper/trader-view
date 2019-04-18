// @flow

import type { Trades, Trader, Id, TradeType, TimeStamp } from '../types/traders';
import type { Action } from '../types';

const createTrade = (id: Id, symbol: Symbol, price: Price, count: Shares, timeStamp: TimeStamp): Trader => ({
    id,
    symbol,
    price,
    count,
    timeStamp
});

const trades = (state: Trades = [], action: Action): Trades => {
    switch (action.type) {
        case 'ADD_TRADE':
            return [...state, createTrade(action.id, action.symbol, action.price, action.count, action.timeStamp)];
        default:
            return state;
    }
};

export default trades;
