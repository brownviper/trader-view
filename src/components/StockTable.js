import React, { Component } from 'react';
import {Table} from 'reactstrap';
import { connect } from 'react-redux';
import type { State } from '../types';
import TraderProcessor from "../processors/TraderProcessor";

export type Props = {
    traders: Traders
}


class StockTable extends Component<Props> {

    props = {
        traders: []
    };

    render() {
        const data = new TraderProcessor(this.props.traders).calculateStockExchangeParams();

            const divStyle = {
              margin: '50px'
            };

        return (
            <div className='container' style={divStyle}>
                <h3>Stock yield</h3>
                <div>
                    <Table striped>
                        <thead>
                        <tr>
                            <th />
                            <th>Symbol</th>
                            <th>Dividend Yield</th>
                            <th>P/E Ratio (%)</th>
                            <th>Geometric Mean</th>
                            <th>Weighted Stock Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map(item => {
                            return (
                                <tr key={item.symbol}>
                                    <th />
                                    <td>{item.symbol}</td>
                                    <td>{item.dividendYield}</td>
                                    <td>{item.peRatio}</td>
                                    <td>{item.geometricMean}</td>
                                    <td>{item.volumeWeighted}</td>
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
