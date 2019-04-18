import type { Id, Symbol, Price, Shares, TimeStamp, TradesAction } from '../types/trades';

let nextTradeId: Id = 0;

export const addTrade = (symbol: Symbol, price: Price, count: Shares, timeStamp: TimeStamp): TradesAction => {
    return {
        type: 'ADD_TRADE',
        id: nextTradeId++,
        symbol,
        price,
        count,
        timeStamp
    };
};
