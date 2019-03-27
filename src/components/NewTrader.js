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
            margin: '50px'
        };
        return (
            <div className='container' style={divStyle}>
                <div className="col-md-6">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label>Symbol</label>
                            <input className="form-control" placeholder="enter trader symbol" value={this.state.symbol} onChange={this.handleSymbolChange}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input className="form-control" placeholder="price per share" value={this.state.price} onChange={this.handlePriceChange}/>
                        </div>
                        <div className="form-group">
                            <label>Shares count</label>
                            <input className="form-control" placeholder="total shares count" value={this.state.count} onChange={this.handleCountChange}/>
                        </div>
                        <button className="btn btn-primary" type="submit">Add new trader</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(NewTrader);
