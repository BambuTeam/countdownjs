import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoSvg from "../img/hotel.jpeg"


const Meals = () => {
    return (

        <div className="bg-dark-1 ">
            <Container className="meals-bg">
                <Row >
                    <Col className="meals-bg col-md-6 col-sm-12 col-xs-12">
                        <br />
                        <img src={LogoSvg} alt="Logo Vertikality" />
                    </Col>
                    <Col className="meals-bg col-md-6 col-sm-12 col-xs-12">
                    <br />
                        <h3>Master Classes/Trail Runs</h3>

                        <p>You will be able to take part in one of the most exclusive Training Camps in the region, with some of the world’s Top Athletes.</p>
                        <p>You will have the unique opportunity to participate in four Master Classes given by the Athletes: </p>
                        <p>- Nutrition:  <span className="col-red">Manu Vilaseca</span>
                            <br />- Mental Strategy, Toughness and Training: <span className="col-red">Coree Woltering</span> 
                            <br /> - Speed work & Training: <span className="col-red">Michael Wardian </span> 
                            <br /> - Gear & Night Running: <span className="col-red">Rosalia Camargo</span> </p>
                        <h3> Welcome Kit</h3>
                        <p>Unique T-Shirt Vertikality, Cool Cap, “Train for the Shake” Blender Bottle, Gatorade Hydration bottle  and other surprises.</p>
                        <h2>Meals</h2>
                        <p>Breakfast and Lunch included (Friday, Saturday & Sunday)
                            Dinner available for purchase.
                        </p>
                        <a href="https://www.google.com/" target="_blank">
                            <a href="http://bambu-corp.com/s3/PVertikality.pdf" target="_blank"><button> More Info</button></a>
                        </a>
                    </Col>
                </Row>
                <br />
                <br />

            </Container>
        </div>
    )
}
export default Meals;