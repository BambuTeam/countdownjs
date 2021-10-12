import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import Modal from '../components/Modal'
import Terminos from '../pages/Terminos'
import { Link } from "react-router-dom";




const Contact = () => {
    const [modal, setModal] = useState(false)
    const [participant, setParticipant] = useState({
        fullName: "",
        email: "",
        message: ""
    })
    const favoritos = []
    const [disabled, setDisabled] = useState(true)
    const [acepted, setAcepted] = useState(true)




    useEffect(() => {
        /// este use efect se asegura que los datos del participante no esten en blanco 
        const isParticipant = Object.values(participant).every(el => Boolean(el))
        isParticipant ? setDisabled(false) : setDisabled(true);
        


    function handleChange(mifavorito) {
        //este se asegura de ver los cambios de los campos y asignar los valores 
        //se pueden agregar validaciones por aqui cambios
        const { name, value } = event.target;
        favoritos.append(mifaborito)
        setParticipant((prevState) => ({ ...prevState, [name]: value }))// se maneja el cambio de la variable dentro del set 
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

        <div className="bg-dark-1" >
            <Container className="Contact" id="Contact">
                <Row >
                    <div className="line"></div>
                    <br/>
                    <Col className="col-md-3">
                    </Col>
                    <div className="col-md-6 col-sm-12">
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
                                    placeholder="Full Name*"
                                    onChange={handleChange}
                                    value={participant.fullName}
                                />
                            </p>
                            <p>
                                <label> Email*</label>{" "}
                                <input
                                    required="required"
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="email address*"
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
                                    placeholder="Message"
                                    onChange={handleChange}
                                    value={participant.message}

                                ></textarea>{" "}
                            </p>
                            <p>
                                <a onClick={()=>setModal(true)}>
                                    <input className="checkbox" required="required" type="checkbox" onClick={() => setAcepted(!acepted)} />
                                    <label style={{color:'#fff'}}> I Agree to Terms and Conditions</label></a>
                                <button onClick={() => mostrarAlert()} disabled={disabled || acepted} className="text-center" style={{margin:'auto'}}>
                                    ENVIAR{" "}
                                </button>
                            </p>
                        </form>
                        {/* modal inicion */}
                        <Modal onClose={()=>onAddFavorito(mifavorito)} show={modal}/>





                        

                    </div>
                    <Col className="col-md-3">
                    </Col>
                </Row>
            </Container>
        </div >
    );
}
export default Contact;
