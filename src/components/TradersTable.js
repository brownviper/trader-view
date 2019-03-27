// @flow

import React, { Component } from 'react';
import {Table} from 'reactstrap';
import { connect } from 'react-redux';
import type { State } from '../types';

export type Props = {
    traders: Traders
}
class TradersTable extends Component<Props> {

    props = {
        traders: []
    };

    render() {
        return (
            <div>
                <h3>Traders Table</h3>
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
                            {this.props.traders.map(trader => {
                                return (
                                    <tr>
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

export default connector(TradersTable);
