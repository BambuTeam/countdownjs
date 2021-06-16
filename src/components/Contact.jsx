import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9w8b5b8', 'template_sxqpx16', e.target, 'user_5bDIgYddipK9ipPSncbgw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    const mostrarAlert = () => {

        swal({
            title: "Gracias por realizar tu contancto",
            text: "Pronto se estaran comunicando contigo, somos Bsc-Media",
            icon: "success",
            timer: 4000
        });

    }
    return (

        <div className="bg-dark-1 ">
            <Container className="Contact">
                <Row >
                    <div className="line"></div>
                    <Col className="col-3">
                    </Col>
                    <Col className="col-6">
                        <h2>
                            CONTACT
                        </h2>
                        <form
                            id="contactForm"
                            data-toggle="validator"
                            className="shake" onSubmit={sendEmail}

                        >
                            <p>
                                <label> Name *      </label>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Nombre Completo*"
                                />
                            </p>
                            <p>
                                <label> Email *      </label>{" "}
                                <input
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="contacto@dominio.com*"
                                />
                            </p>{" "}
                            <p>
                                <label> Messages *      </label>{" "}
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Messages"
                                ></textarea>{" "}

                                <button onClick={() => mostrarAlert()}>
                                    ENVIAR{" "}
                                </button>
                            </p>
                        </form>

                    </Col>
                </Row>



                <br />
            </Container>
        </div >
    );
}
export default Contact;
