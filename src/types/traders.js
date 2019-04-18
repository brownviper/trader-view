export type Id = number;
export type TimeStamp = string;
export type Symbol = string;
export type Price = string;
export type Shares = string;
export type TradeType = string;

export type Trader = {
    +id: Id,
    +symbol: Symbol,
    +price: Price,
    +count: Shares,
    +timeStamp: TimeStamp
};
export type Trades = Array<Trader>;

export type TradersState = {
    +traders: Trades
};

export type TradersAction = {
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
