import type { Id, Symbol, Price, Shares, TimeStamp, TradersAction } from '../types/traders';

let nextTraderId: Id = 0;

export const addTrader = (symbol: Symbol, price: Price, count: Shares, timeStamp: TimeStamp): TradersAction => {
    return {
        type: 'ADD_TRADER',
        id: nextTraderId++,
        symbol,
        price,
        count,
        timeStamp
    };
};
