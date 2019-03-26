// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { TradersState, TradersAction } from './traders';

export type ReduxInitAction = { type: '@@INIT' };

export type State = TradersState;

export type Action = ReduxInitAction | TradersAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
