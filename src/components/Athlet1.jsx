import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Runners from "../img/runners/csarmiento.png"


const Athlet1 = () => {
    return (

        <div className="bg-dark-1 ">
            <Container className="athlet-bg">
                <Row >

                    <Col className="col-4">

                        <img src={Runners} alt="csarmiento" />
                    </Col>
                    <Col className="col-8">
                        <h2>FOUNDER VERTIKALITY</h2>
                        <h3>CHARLIE SARMIENTO</h3>
                        <p>Founder & Business Strategy Director</p>
                        <p><span>•</span>Corpotate Executive with over 14 years of Coporate Experience</p>
                        <p><span>•</span>Founder of 3 Companies in Guatemala: ZeroSixty, Vertikal Sports Perfommance & Vertikality</p>
                        <p><span>•</span>Elite Athlete As Ultra Trail Runner for Over 6 years, competing in over 17 Ultra Marathons.</p>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Athlet1;