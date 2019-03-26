import type { Id, TimeStamp, TradersAction } from '../types/traders';

let nextTraderId: Id = 0;

export const addTrader = (timeStamp: TimeStamp): TradersAction => {
    return {
        type: 'ADD_TRADER',
        id: nextTraderId++,
        timeStamp
    };
};
