import React, { Component } from 'react'
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

export default class CarDetail extends Component {
    render() {
        return (
            <>
                
                <h3 className='details'>Araç Detay</h3>
                <Card className='mb-3'>
                    <CardHeader>
                        {this.props.currentCar.name} {this.props.currentCar.surname}
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="6">
                                <Row>

                                    <Col md="4">Marka</Col>
                                    <Col md="8">{this.props.currentCar.marka}</Col>
                                    <Col md="4">Model</Col>
                                    <Col md="8">{this.props.currentCar.model}</Col>
                                </Row>
                            </Col>
                            <Col md="6">
                                <Row>

                                    <Col md="4">Plaka</Col>
                                    <Col md="8">{this.props.currentCar.plaka}</Col>
                                    <Col md="4">Mevcut Durumu</Col>
                                    <Col md="8">{this.props.currentCar.mdurum}</Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <Row className='p-2'>
                    <Col>
                        {this.props.currentCar.comments?.map(c => (
                            <div key={c.commentId} className="comment">
                                <Alert color='secondary'>
                                    {c.comment}
                                </Alert>
                                <p className='comment-date'>
                                    Yorum tarihi : {c.date.formatDDMMYYYY()}
                                </p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </>

        )
    }
}
