import React, { Component } from 'react';
import { Row, Table } from 'reactstrap';

export default class CarList extends Component {
    render() {

        return (
            <>
                <Row>
                    <h2>Araç Listesi </h2>
                </Row>
                <Row>
                    <Table bordered hover striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Marka</th>
                                <th>Model</th>
                                <th>Plaka</th>
                                <th>Mevcut Durumu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cars.map(c => (
                                <tr key={c.carId} onClick={() => this.props.changeSelected(c)}>
                                    <td>{c.carId}</td>
                                    <td>{c.marka}</td>
                                    <td>{c.model}</td>
                                    <td>{c.plaka}</td>
                                    <td>{c.mdurum}</td>
                                </tr>
                            ))}



                        </tbody>
                    </Table>
                </Row>
            </>
        );
    }
}
