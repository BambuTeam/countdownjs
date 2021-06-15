import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const Vision = () => {
    return (

        <div className="bg-dark-1 ">
            <Container className="vision-bg">
                <Row >
                    <div className="line"></div>
                    <Col className="col-5">

                        <h1>OUR <br /> VISION</h1>
                    </Col>
                    <Col className="col-7">
                        <p>Training Camps Lead by World Elite Athletes in iconic Locations</p>
                        <p>Training Camps Presented as a 3-day-weekend event, Athletes will be
                            able to take part of some of the most exclusive training camps in the
                            country alongside some of the World's Top Athletes, where they will learn
                            technique, mental, training, nutrition, and some of the secrets Elite Athletes
                            do to preform at their best.</p>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Vision;