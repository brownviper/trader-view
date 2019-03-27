import React, { Component } from 'react';
import {Table} from 'reactstrap';
import { connect } from 'react-redux';
import type { State } from '../types';

export type Props = {
    traders: Traders
}


class StockTable extends Component<Props> {

    props = {
        traders: []
    };

    render() {
        const sortedTraders = this.props.traders.sort((a, b) => {
            return new Date(b.timeStamp) - new Date(a.timeStamp)
        });
        return (

            <div>
                <h3>Stock yield</h3>
                <div>
                    <Table striped>
                        <thead>
                        <tr>
                            <th />
                            <th>Dividend Yield</th>
                            <th>P/E Ratio</th>
                            <th>Geometric Mean</th>
                            <th>Weighted Stock Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sortedTraders.map(trader => {
                            return (
                                <tr key={trader.id}>
                                    <th />
                                    <td>{trader.symbol}</td>
                                    <td>{trader.price}</td>
                                    <td>{trader.count}</td>
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

export default connector(StockTable);
