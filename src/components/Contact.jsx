import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const INITIAL_STATE = {
    nombre: "",
    correo:"",
    mensaje:""
}


const Contact = () => {
    const [participant, setParticipant] = useState(INITIAL_STATE)
    const [disabled, setDisabled] = useState(true)
    const [dataform, setDataform] = useState(false)

    const handlesubmit = ()=>{

    }

    useEffect(()=>{
        const isValid = false 
        
        setDataform(isValid)
    },[participant])
    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setParticipant({
            ...participant,
            [event.target.name] : event.target.value
        })
    }

    


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
                                    required="required"
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Nombre Completo*"
                                    onChange={handleInputChange}
                                    value = {participant.name}
                                />
                            </p>
                            <p>
                                <label> Email*</label>{" "}
                                <input
                                    required="required"
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="contacto@dominio.com*"
                                    onChange={handleInputChange}
                                    event={participant.email}

                                />
                            </p>{" "}
                            <p>
                                <label> Messages *      </label>{" "}
                                <textarea
                                    required="required"
                                    name="message"
                                    id="message"
                                    cols="10"
                                    rows="10"
                                    placeholder="Messages"
                                    onChange={handleInputChange}
                                    value = {participant.message}

                                ></textarea>{" "}
                            </p>
                            <p>
                                <a href="/services">
                                    <input className="checkbox" required="required" type="checkbox" onClick={()=>setDisabled(!disabled)}  />
                                    <label> Acepto Terminos & Condiciones </label></a>
                            </p>
                            <p>
                                <button onClick={() => mostrarAlert()} disabled={disabled}>
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
