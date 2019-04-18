// @flow

import type { Trades, Trade, Id, TradeType, TimeStamp } from '../types/trades';
import type { Action } from '../types';

const createTrade = (id: Id, symbol: Symbol, price: Price, count: Shares, timeStamp: TimeStamp): Trade => ({
    id,
    symbol,
    price,
    count,
    timeStamp
});

const tradesReducer = (state: Trades = [], action: Action): Trades => {
    switch (action.type) {
        case 'ADD_TRADE':
            return [...state, createTrade(action.id, action.symbol, action.price, action.count, action.timeStamp)];
        default:
            return state;
    }
};

export default tradesReducer;
