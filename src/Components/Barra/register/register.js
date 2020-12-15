import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

const BotonRegister = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [datos /*el que*/, setDatos /*cómo cambia*/] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        //NO OLVIDARSE ESTO, IMPORTANTÍSIISISSIISMO
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        });
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        //console.log(datos.nombre + " " + datos.apellido);
        //petición axios con la que sea 
        savePeople();
    };

    const savePeople = () => {
        fetch('https://rollingcode2020.herokuapp.com/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        })
        .then((res) => res.json())
            .then((result) => alert(JSON.stringify(result)))
            .catch((err) => alert(JSON.stringify(err)))
    };


    return (
        <>
            <Button variant="outline btn-warning mr-sm-2" onClick={handleShow}>
                Registrarse
      </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrarse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Login">
                            <Form onSubmit={enviarDatos}>
                            <Form.Group size="lg" controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="name"
                                    name="name"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>                        
                                <Button block size="lg" type="submit" variant="outline btn-warning mr-sm-2" onClick={handleClose}>
                                    Registrarse
                                </Button>
                            </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BotonRegister;