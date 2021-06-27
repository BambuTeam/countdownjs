import React, { useState} from "react";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import Modal from '../components/Modal'
import Terminos from '../pages/Terminos'
import { Link } from "react-router-dom";


const Contact = () => {
    const [modal, setModal] = useState(false)


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_avpb7ep', 'template_gfabn9n', e.target, 'user_ZDplgb2PRFXpCCvaMxDv9')
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
            text: "Pronto se estaran comunicando contigo, somos Vertikality",
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
                                <label> Name  *</label>
                                <input
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Nombre Completo*"
                                />
                            </p>
                            <p>
                                <label> Email*</label>{" "}
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
                                    cols="10"
                                    rows="10"
                                    placeholder="Messages"
                                ></textarea>{" "}
                            </p>
                            <p>
                            <input type="checkbox" />

                                <a onClick={()=>setModal(true)}>
                                    <label> Acepto Terminos & Condiciones </label>{" "}
                                </a>
                                
                                <button onClick={() => mostrarAlert()}>
                                    ENVIAR{" "}
                                </button>
                            </p>
                        </form>
                        {/* modal inicion */}
                        <Modal onClose={()=>setModal(false)} show={modal}/>
                        

                    </Col>
                </Row>



                <br />
            </Container>
        </div >
    );
}
export default Contact;
