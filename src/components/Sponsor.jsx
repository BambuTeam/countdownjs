import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sponsor1 from "../img/sponsor/fcayetano.svg"
import sponsor2 from "../img/sponsor/excel.png"
import sponsor3 from "../img/sponsor/Ford.svg"
import sponsor4 from "../img/sponsor/inguat.svg"
import sponsor5 from "../img/sponsor/hyperice.svg"

import sponsor7 from "../img/sponsor/normatec.svg"
import sponsor8 from "../img/sponsor/coros.svg"
import sponsor9 from "../img/sponsor/060.svg"
import sponsor10 from "../img/sponsor/oceana.svg"
import sponsor11 from "../img/sponsor/bambu.svg"
import sponsor12 from "../img/sponsor/bambu.svg"


const Sponsor = () => {
    return (

        <div className="bg-dark-1 ">
            <Container className="sponsor-bg">
                <div className="line"></div>
                {/* PRIMERA FILA */}
                <Row >
                    <Col className="col-1">
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor1} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor2} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor3} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor4} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor5} alt="csarmiento" />
                    </Col>
                    <Col className="col-1">
                    </Col>
                </Row>

                {/* SEGUNDA FILA */}
                <Row >
                    <Col className="col-1">
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor7} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor8} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor9} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor10} alt="csarmiento" />
                    </Col>
                    <Col className="col-2">
                        <img src={sponsor11} alt="csarmiento" />
                    </Col>
                    <Col className="col-1">
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
    )
}
export default Sponsor;