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
                <p>Breakfat and Lunch(Friday, Saturday & Sunday)</p>
                     <h3> Welcome Kit</h3>  
                    <p>T-Shirt Vertikality, Notebook, Propelling pencil,
                        Cap, Blender Bottle.</p>

                    <h3>Master Classes.</h3>

                    <p>Atheletes will be able to take part of some of the
                    most exclusive training camps in the country 
                    alongside some of the Wordl's Top Athletes, where
                    the will lear technique, mental training, and
                    some of the secrets Elite Athletes do yo perform at 
                    their best.</p>

                    <a href="https://www.google.com/" target="_blank">
                      <button> More Info</button>
                     </a>
                </Col>
                </Row>
                <br/>
            </Container>
        </div>
    )
} 
export default Meals;