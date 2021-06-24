import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import sponsor1 from "../img/sponsor/excel.png"
import sponsor2 from "../img/sponsor/Ford.svg"
import sponsor3 from "../img/sponsor/fcayetano.svg"
import sponsor4 from "../img/sponsor/060.svg"
import sponsor5 from "../img/sponsor/claro sports.svg"
import sponsor6 from "../img/sponsor/B.png"
import sponsor7 from "../img/sponsor/inguat.svg"
import sponsor8 from "../img/sponsor/Gatorade.svg"
import sponsor9 from "../img/sponsor/oceana.svg"
import sponsor10 from "../img/sponsor/bambu.svg"
import sponsor11 from "../img/sponsor/hyperice.svg"
import sponsor12 from "../img/sponsor/coros.svg"
import sponsor13 from "../img/sponsor/normatec.svg"







const Sponsor = () => {


    return (

        <div className="bg-dark-1" id="Sponsor">
            <Container className="sponsor-bg">
                <div className="line"></div>
                {/* PRIMERA FILA */}
                <Row >
                   
                    <Col className="col-2">
                        <a href="http://excelautomotriz.com/guatemala/" target="_blank">
                            <img src={sponsor1} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://www.fordguatemala.com/" target="_blank">
                            <img src={sponsor2} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://sancayetano.gt/" target="_blank">
                            <img src={sponsor3} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://zerosixty.co/" target="_blank">
                            <img src={sponsor4} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                    <a href="https://hyperice.com/" target="_blank">
                            <img src={sponsor11} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://www.coros.com/" target="_blank">
                            <img src={sponsor12} alt="csarmiento" /></a>
                    </Col>
                </Row>

                {/* SEGUNDA FILA */}
                <Row >
                    <Col className="col-2">
                        <a href="https://clarosports.claro.com.gt/home/" target="_blank">
                            <img src={sponsor5} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://www.bite.gt/" target="_blank">
                            <img src={sponsor6} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://inguat.gob.gt/" target="_blank">
                            <img src={sponsor7} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://www.instagram.com/gatoradegt/?hl=es" target="_blank">
                            <img src={sponsor8} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://oceana.com.gt/" target="_blank">
                            <img src={sponsor9} alt="csarmiento" /></a>
                    </Col>
                    <Col className="col-2">
                        <a href="https://www.instagram.com/bambu.team/" target="_blank">
                            <img src={sponsor10} alt="csarmiento" /></a>
                    </Col>
                </Row>
                <br />
                
            </Container>
        </div>
    )
}
export default Sponsor;