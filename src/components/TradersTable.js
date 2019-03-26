import React, { Component } from 'react';
import {Table} from 'reactstrap';

class TradersTable extends Component {
    render() {
        return (
            <div>
            <h2>Traders Table</h2>
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            </div>
        );
    }
}

export default TradersTable;
