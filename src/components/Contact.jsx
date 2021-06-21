import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { Link } from "react-router-dom";




const Contact = () => {
    const [participant, setParticipant] = useState({
        fullName:"",
        email:"",
        message:""
    })
    const [disabled, setDisabled] = useState(true)
    const [acepted, setAcepted] = useState(true)
    
    


    useEffect(()=>{
        /// este use efect se asegura que los datos del participante no esten en blanco 
        const isParticipant  = Object.values(participant).every(el=>Boolean(el))
        isParticipant ? setDisabled(false):setDisabled(true);
    },[participant])
    

    function handleChange(event){
        //este se asegura de ver los cambios de los campos y asignar los valores 
        //se pueden agregar validaciones por aqui cambios
        const {name, value} = event.target;

        setParticipant((prevState)=>({...prevState, [name]: value}))// se maneja el cambio de la variable dentro del set 
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
                                    name="fullName"
                                    type="text"
                                    id="fullName"
                                    placeholder="Nombre Completo*"
                                    onChange={handleChange}
                                    value = {participant.fullName}
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
                                    onChange={handleChange}
                                    value={participant.email}

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
                                    onChange={handleChange}
                                    value = {participant.message}

                                ></textarea>{" "}
                            </p>
                            <p>
                                <a href="/services">
                                    <input className="checkbox" required="required" type="checkbox" onClick={()=>setAcepted(!acepted)}  />
                                    <label> Acepto Terminos & Condiciones </label></a>
                            </p>
                            <p>
                                <button onClick={() => mostrarAlert()} disabled={disabled || acepted}>
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
