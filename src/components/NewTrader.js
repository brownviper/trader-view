// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTrader } from '../actions/traders';

import type { Dispatch } from '../types';
import type {Price, Shares, Symbol} from "../types/traders";

export type Props = {
    dispatch: Dispatch
};

export type State = {
    symbol: Symbol,
    price: Price,
    count: Shares
};

class NewTrader extends Component<Props, State> {
    state = {
        symbol: '',
        price: '',
        count: ''
    };

    handleSymbolChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        this.setState({
            symbol: event.currentTarget.value
        });
    };

    handlePriceChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        this.setState({
            price: event.currentTarget.value
        });
    };

    handleCountChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
        this.setState({
            count: event.currentTarget.value
        });
    };

    handleFormSubmit = (event: Event) => {
        event.preventDefault();
        if (!this.state.symbol || !this.state.price || !this.state.count) {
            return;
        }

        this.props.dispatch(addTrader(this.state.symbol, this.state.price, this.state.count, new Date().toString()));
        this.setState({
            symbol: '',
            price: '',
            count: ''
        });
    };

    render() {
        const divStyle = {
            display: 'block',
            paddingRight: '50px'
        };
        return (
            <div className="container-fluid margins">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="col-10">
                        <div>
                            <label>Symbol</label>
                            <input placeholder="enter trader symbol" value={this.state.symbol} onChange={this.handleSymbolChange}/>
                        </div>
                    </div>
                    <div className="col-10">
                        <label>Price</label>
                        <input placeholder="share price" value={this.state.price} onChange={this.handlePriceChange}/>
                    </div>
                    <div className="col-10">
                        <label>Shares count</label>
                        <input placeholder="shares count" value={this.state.count} onChange={this.handleCountChange}/>
                    </div>
                    <button type="submit">Add new trader</button>
                </form>
            </div>
        );
    }
}

export default connect()(NewTrader);
