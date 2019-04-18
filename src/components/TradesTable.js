// @flow

import React, { Component } from 'react';
import {Table} from 'reactstrap';
import { connect } from 'react-redux';
import type { State } from '../types';

export type Props = {
    trades: Trades
}
class TradesTable extends Component<Props> {

    props = {
        trades: []
    };

    render() {
        const sortedTrades = this.props.trades.sort((a, b) => {
            return new Date(b.timeStamp) - new Date(a.timeStamp)
        });

        const divStyle = {
            margin: '50px'
        };

        return (

            <div className='container' style={divStyle}>
                <h3>Trades Table</h3>
                <div>
                    <Table striped>
                        <thead>
                            <tr>
                                <th />
                                <th>Symbol</th>
                                <th>Share price</th>
                                <th># shares</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTrades.map(trade => {
                                return (
                                    <tr key={trade.id}>
                                        <th />
                                        <td>{trade.symbol}</td>
                                        <td>{trade.price}</td>
                                        <td>{trade.count}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return state;
};

const connector = connect(
    mapStateToProps
);

export default connector(TradesTable);
