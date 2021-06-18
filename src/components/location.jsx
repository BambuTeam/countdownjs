import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import LogoCayetano from "../img/logocayetano.svg"




const Location=()=>(

  <div className="bg-dark-1 ">
  <Container className="location-bg">
    
      <Row >
          <Col className="col-4">
          <img src ={LogoCayetano} alt="Logo Vertikality"/>
          </Col>
          <Col className="col-8">
          <p>LOCATION: Finca San Cayetano<br />
                Km. 89.5 Ruta Nacional 14, San Juan Alotenango.</p>
                
          </Col>
      </Row>

  </Container>
  </div>


)

export default Location;