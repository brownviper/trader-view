export type Id = number;
export type TimeStamp = string;
export type Symbol = string;
export type Price = string;
export type Shares = string;

export type Trader = {
    +id: Id,
    +symbol: Symbol,
    +price: Price,
    +count: Shares,
    +timeStamp: TimeStamp
};
export type Traders = Array<Trader>;

export type TradersState = {
    +traders: Traders
};

export type TradersAction = {
    type: 'ADD_TRADER',
    +id: Id,
    +symbol: Symbol,
    +price: Price,
    +count: Shares,
    +timeStamp: TimeStamp
};


