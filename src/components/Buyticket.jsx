import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Countdown from './Countdown';





const Buyticket=()=>(
  
  <Container className="Buytickets">

      <Row>
        <div className="col-lg-12 countdown">
          <Countdown />
        </div>
      <Col>
      
      <a href="https://www.google.com/" target="_blank">
      <button>BUY TICKET</button>
      </a>
      </Col>
      </Row>
      <Row>
          <Col>
          <p>DATE: 27, 28 & 29 August 2021</p>
          </Col>
      </Row>
  </Container>


)

export default Buyticket;