import React from "react";
import LogoSvg from "../img/logovertikality.svg"
import { Col, Container, Row } from 'react-bootstrap';




const Navbar=()=>(
  
  <Container>
  <Row>
    <Col className="logosvg col-3">
    <br />
    <img src ={LogoSvg} alt="Logo Vertikality"/>
    </Col>
  
  </Row>
  </Container>


)

export default Navbar;