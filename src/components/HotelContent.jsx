import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Hotel from "../img/hotel.png"



const HotelContent=()=>(

  <div className="bg-dark-1 ">
  <Container>
    
      <Row >
          <Col >
          <img src ={Hotel} alt="Hotel"/>
          </Col>
          <Col >
          <p>LOCATION: Finca San Cayetano<br />
                Km. 89.5 Ruta Nacional 14, San Juan Alotenango.</p>
                
          </Col>
      </Row>

  </Container>
  </div>


)

export default HotelContent;