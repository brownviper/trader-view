export type Id = number;
export type TimeStamp = string;
export type Symbol = string;
export type Price = string;
export type Shares = string;
export type TradeType = string;

export type Trade = {
    +id: Id,
    +symbol: Symbol,
    +price: Price,
    +count: Shares,
    +timeStamp: TimeStamp
};
export type Trades = Array<Trade>;

export type TradesState = {
    +traders: Trades
};

export type TradesAction = {
    type: 'ADD_TRADE',
    +id: Id,
    +symbol: Symbol,
    +price: Price,
    +count: Shares,
    +timeStamp: TimeStamp
};

export type SampleData = {
    symbol: Symbol,
    tradeType: TradeType,
    lastDividend: number,
    fixedDividend: number,
    parValue: number
};
