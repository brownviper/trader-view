// @flow

import type { Traders, Trader, Id, TimeStamp } from '../types/traders';
import type { Action } from '../types';

const createTrader = (id: Id, timeStamp: TimeStamp): Trader => ({
    id,
    timeStamp
});

const traders = (state: Traders = [], action: Action): Traders => {
    switch (action.type) {
        case 'ADD_TRADER':
            return [...state, createTrader(action.id, action.timeStamp)];
        default:
            return state;
    }
};

export default traders;
