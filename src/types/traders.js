export type Id = number;
export type TimeStamp = Date;
export type Trader = {
    +id: Id,
    +timeStamp: TimeStamp
};
export type Traders = Array<Trader>;

export type TradersState = {
    +traders: Traders
};

export type TradersAction = { type: 'ADD_TRADER', +id: Id, +timeStamp: TimeStamp };


