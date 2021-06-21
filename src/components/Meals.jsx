import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LogoSvg from "../img/hotel.jpeg"


const Meals =()=>{
    return(
        
        <div className="bg-dark-1 ">     
            <Container className="meals-bg">
            <Row >
                <Col className="col-6">
                    <br/>>
                    <img src ={LogoSvg} alt="Logo Vertikality"/>
                </Col>
                <Col className="meals-bg col-6">
                 <h2>Meals</h2>
                <p>Breakfast and Lunch included (Friday, Saturday & Sunday)
                    Dinner available for purchase.
                    </p>
                     <h3> Welcome Kit</h3>  
                    <p>Unique T-Shirt Vertikality, Cool Cap, “Train for the Shake” Blender Bottle, Gatorade Hydration bottle  and other surprises..</p>

                    <h3>Master Classes/Trail Runs</h3>

                    <p>You will be able to take part in one of the most exclusive Training Camps in the region, with some of the world’s Top Athletes.</p>
                    <p>You will have the unique opportunity to participate in four Master Classes given by the Athletes: </p>
                    <br />
                    <p>- Nutrition:  Manu Vilaseca
                    <br />- Mental Strategy, Toughness and Training. Coree </p>
                    <h3>Woltering </h3>
                    <p>- Speed work & Training: Michael Wardian <br />
                        - Gear & Night Running: Rosalia Camargo
                        </p>

                    <a href="https://www.google.com/" target="_blank">
                      <button> More Info</button>
                     </a>
                </Col>
                </Row>
                <br/>
                <br/>

            </Container>
        </div>
    )
} 
export default Meals;