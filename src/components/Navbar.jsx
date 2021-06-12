import React from "react";
import LogoSvg from "../img/logovertikality.svg"
import { Col, Container, Row } from 'react-bootstrap';




const Navbar=()=>(
  
  <Container>
  <Row>
    <Col className="logosvg col-6">
    <br />
    <img src ={LogoSvg} alt="Logo Vertikality"/>
    </Col>
    <Col className="txt-nav">
    <br />
      <p>The most exclusive Training Camps & Race <br /> Series events in the region, alongside some of <br /> the world top athletes.</p>
    </Col>
  </Row>
  </Container>


)

export default Navbar;