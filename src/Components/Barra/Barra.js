import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Barra.css';
import {
    Link
  } from 'react-router-dom';
import { Navbar, Nav, Form, Image } from 'react-bootstrap';
import Logo from './Logo.jpg';
import BotonLogin from './Login/login';
import BotonRegister from './register/register';

const Barra = () => {

    return (
        
        <div className="App">
            <div className="barrita justify-content-center d-none d-md-block">
                <a  target="_blank" rel="noreferrer" href="https://www.argentina.gob.ar/salud/coronavirus-COVID-19">
                    <p className="coronavirus">Coronavirus (COVID-19): todo lo que tienes que saber</p>
                </a>
            </div>
            <Navbar className="navbar" expand="lg">
                <Image src={Logo} className="logo"/>
                <Navbar.Brand href="#home" style={{ margin: '15px' }}>
                    <h5 className="text-dark">Forums</h5>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <li className="text-dark m-2">
                            <Link to="/">
                                <h5 className="text-dark">Home</h5>
                                </Link>
                            </li>
                        <li className="text-dark m-2">
                            <Link to="/conocenos">
                                <h5 className="text-dark">Conócenos</h5>
                                </Link>
                            </li>
                        <li className="text-dark m-2">
                            <Link to="/turnos">
                                <h5 className="text-dark">Turnos</h5>
                                </Link>
                            </li>
                            <li className="text-dark m-2">
                            <Link to="/lugares">
                                <h5 className="text-dark">Lugares</h5>
                                </Link>
                            </li>
                        <li className="text-dark m-2">
                            <Link to="/contacto">
                                <h5 className="text-dark">Contacto</h5>
                                </Link>
                            </li>
                    </Nav>
                    <Form inline>
                        <BotonLogin />
                        <BotonRegister />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className="barrita-abajo d-flex justify-content-center">

            </div>
        </div>
        
    );
}

export default Barra;