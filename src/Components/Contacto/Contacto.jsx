import React, { useState } from 'react';
import Form from './Formulario/Formulario';
import Mapa from './Mapa/mapa';
import bannerContacto from '../Imagenes/bannerContacto.png';
import imgemail from '../Imagenes/email.png';
import iconowhatsap from '../Imagenes/iconowhatsap.png';
import { Container, Row,Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Formulario/style.css';

const Formu = () => {

  const [mails, setMails] = useState([])
  const [mail, setMail] = useState({
    nombre: "",
    email: "",
    asunto: "",
    descripcion: ""
  })

  return (
    <>
      <React.Fragment>
      <Container >
        
        <Row className="justify-content my-3">
        <Col className="mb-3" SG >
          <Image id="iconowhatsap" className="d-block mx-auto img-fluid" src={iconowhatsap} />
          <h2>+54 381 6123</h2>
          </Col>
        <Col className="mb-6" SG  >
          <Image id="bannerContacto" className="d-block mx-auto img-fluid" src={bannerContacto} />
          </Col>
          <Col className="mb-3" SG  >
          <Image id="imgemail" className="d-block mx-auto img-fluid" src={imgemail} />
          <h2>consulta@consultorio.com</h2>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4" xs={6}>
            <Form 
            setMail={setMail}
             mail={mail} 
             mails={mails}
             setMails={setMails}
             />
            
          </Col>
          <Col className="mb-6" xs={6}>
            <h3 className="text-center text-primary">Ubicacion Sede</h3>
            <Mapa />
          </Col>
          
        </Row>
      </Container>
    </React.Fragment>

    </>
  )
}

export default Formu

