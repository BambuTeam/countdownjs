import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Runners from "../img/runners/csarmiento.png"


const Athlet1 = () => {
    return (

        <div className="bg-dark-1 ">
            <br />
            <Container className="athlet-bg">
                <Row >

                    <Col className="col-md-4 col-sm-12 col-xs-12 ">

                        <img src={Runners} alt="csarmiento" />
                    </Col>
                    <Col className="col-md-8 col-sm-12 col-xs-12 ">
                        <h2>FOUNDER VERTIKALITY</h2>
                        <h3>CHARLIE SARMIENTO</h3>
                        <p>Founder & Business Strategy Director</p>
                        <p><span>•</span> Elite Athlete As Ultra Trail Runner for Over 6 years, competing in over 17 international  Ultra Marathons including a Trail World Championship in 2018.</p>
                        <p><span>•</span> Founder of 5 ventures in Guatemala: ZeroSixty, Vertikal Sports Performance, Pilates ProWorks, Sports Time TV  & Vertikality.</p>
                        <p><span>•</span> Board of Directors Skyrunning Guatemala, an NGO to promote sports  in the country.</p>
                        <p><span>•</span> Founder of the 1st. Guatemala Skyrunning National Team.</p>

                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Athlet1;