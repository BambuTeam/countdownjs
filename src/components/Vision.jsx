import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const Vision = () => {
    return (

        <div className="bg-dark-1 ">
            <Container className="vision-bg">
                <Row >
                    <div className="line"></div>
                    <Col className="col-md-5 col-sm-12 col-xs-12 ">

                        <h1>OUR <br /> VISION</h1>
                    </Col>
                    <Col className="col-md-7 col-sm-12 col-xs-12 ">
                        <p>Create unique and memorable experiences for athletes around the region, while exploring unmatched sightseeing & undiscovered places around the Heart of the Mayan Civilization.</p>
                        <p>Each race is strategically developed to exceed expectations and be amongst the world’s best races, in different modalities: Obstacle Racing, Relay Racing & Trail Racing</p>
                        <p>Athletes will also have the opportunity to participate in World Class Training Camps with Top World  Athletes in each Discipline over the course of 3 days.</p><br />
                        <div class="line"></div>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Vision;