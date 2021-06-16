import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import logo1 from "../img/vertikality.svg"
import logo2 from "../img/log_vertikal.svg"

const Buyticket2=()=>(

  <div className="bg-dark-1">
  <Container className="Buytickets2">
  <div className="line"></div>
      <Row>    
        <Col className="col-3">
        
        </Col>
        <Col className="col-2">
        <img src={logo1} alt="csarmiento" />
        </Col>
        <Col className="col-1">
                <h1>BY</h1>
        </Col>
        <Col className="col-1">
        <img src={logo2} alt="csarmiento" />
        </Col>
        <Col className="col-4">
            <br />
            <a href="https://www.google.com/" target="_blank">
            <button>BUY TICKET</button>
            </a>
        </Col>
      </Row>
  </Container>
  </div>


)

export default Buyticket2;