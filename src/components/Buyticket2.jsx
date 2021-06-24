import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import logo1 from "../img/vertikality.svg"
import logo2 from "../img/log_vertikal.svg"

const Buyticket2=()=>(

  <div className="bg-dark-1" id="BuyTicket2">
  <Container className="Buytickets2">
  <div className="line"></div>
      <Row>    
        <Col className="col-3">
        
        </Col>
        <Col className="col-2 logo-vertikality">
        <img src={logo1} alt="csarmiento" />
        </Col>
        <Col className="col-1 txt-by">
                <h1>BY</h1>
        </Col>
        <Col className="col-1 logo-vertikal">
        <img src={logo2} alt="csarmiento" />
        </Col>
        <Col className="col-5">
            <br />
            <a href="https://zerosixty.co/store/VERTIKALITY-EVENT-p368643735" target="_blank">
            <button>BUY TICKET</button>
            </a>
        </Col>
      </Row>
  </Container>
  </div>


)

export default Buyticket2;