import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Runners from "../img/runners/nick.png"


const Athlet2 = () => {
    return (

        <div className="bg-dark-1 ">
            <Container className="athlet-bg">
                <Row >
                    <Col className="col-4">

                        <img src={Runners} alt="csarmiento" />
                    </Col>
                    <Col className="col-8">
                        <h2>CAMP DIRECTOR</h2>
                        <h3>NICK MOORE</h3>
                        <p>Nick “The Preacher” Moore is a native of Boise, Idaho, USA.
                            Some of her highlights include:</p>
                        <p><span>•</span>Director - Spartan Race Series in 9 different cities.</p>
                        <p><span>•</span>Director - North Face Endurance Challenge North & South America.</p>
                        <p><span>•</span> Director - High-Tech Adventure Racing Series/ Balance Bar Series.</p>
                        <p><span>•</span>  Director - Nautica Malibu Triathlon.</p>
                        <p>
                            Number of Races: 250 races

                            Countries: 21

                            Distance 160,000Kms

                            Events Planned: 250 event

                            Countries: 10+
                        </p>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Athlet2;