import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Runners from "../img/runners.png"
import TextRu from "../img/txt-exp"


const Header=()=>(
  
  <Container>
    <Row>
      <br />
    <p className="col-12 txt-runner">The most exclusive Training Camps & Race <br /> Series events in the region, alongside some of <br /> the world top athletes.</p>
    </Row>
    
  <Row>
    <Col className="Runners col-12 " >
    <img src ={Runners} alt="Logo Vertikality"/>
    </Col>

    
    <img src ={TextRu} alt="Logo Vertikality" className="TextRu"/>
    
    
  </Row>
  <div id="clock"></div>


  </Container>
  


)

export default Header;