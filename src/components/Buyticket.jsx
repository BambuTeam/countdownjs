import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Countdown from './Countdown';





const Buyticket=()=>(

  <div className="bg-dark-1">
  <Container className="Buytickets">

      <Row>
        <div className="col-lg-12 countdown">
          <Countdown />
        </div>
      <Col>
  
      <br />
      <a href="https://zerosixty.co/store/VERTIKALITY-EVENT-p368643735" target="_blank">
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
  </div>


)

export default Buyticket;