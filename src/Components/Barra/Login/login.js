import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

const BotonLogin = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userName, setUserName] = useState("");


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && userName.length > 5;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <Button variant="outline btn-primary mr-sm-2" onClick={handleShow}>
                Iniciar Sesión
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Login">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group size="lg" controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="user"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button block size="lg" type="submit" disabled={!validateForm()}>
                                Login
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

export default BotonLogin;