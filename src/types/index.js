// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { TradesState, TradesAction } from './trades';

export type ReduxInitAction = { type: '@@INIT' };

export type State = TradesState;

export type Action = ReduxInitAction | TradesAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
