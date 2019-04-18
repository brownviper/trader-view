import type { Id, Symbol, Price, Shares, TimeStamp, TradersAction } from '../types/traders';

let nextTradeId: Id = 0;

export const addTrade = (symbol: Symbol, price: Price, count: Shares, timeStamp: TimeStamp): TradersAction => {
    return {
        type: 'ADD_TRADE',
        id: nextTradeId++,
        symbol,
        price,
        count,
        timeStamp
    };
};
