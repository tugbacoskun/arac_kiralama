import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import CarList from "./CarList"
import CarDetail from './CarDetail'

export default class Cars extends Component {
    state = {
        selectedCar: {},
        cars: [
            {
                carId: 1,
                marka: "Hyundai",
                model: "I20",
                plaka: "34 BDG 12",
                mdurum: "KİRALIK",
                
            },
            {
                carId: 2,
                marka: "Renault",
                model: "Clio",
                plaka: "54 GDF 45",
                mdurum: "MÜSAİT",
                
            },
            {
                carId: 3,
                marka: "Toyota",
                model: "Corolla",
                plaka: "14 FGF 54",
                mdurum: "MÜSAİT",
                
            },
            {
                carId: 4,
                marka: "Fiat",
                model: "Egea",
                plaka: "20 FY 345",
                mdurum: "KİRALIK",
               
            }
        ]
    }
    changeCar = (car) => {
        
        this.setState({ selectedCar: car });
    }
    render() {
        return (
            <Row>
                <Col md="6">
                    
                    <CarList cars={this.state.cars} changeSelected={this.changeCar} />
                </Col>
                <Col md="6">
                    
                    <CarDetail currentCar={this.state.selectedCar} />
                </Col>
            </Row>
        )
    }
}
