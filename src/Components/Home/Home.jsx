import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from '../Calesita/calesitas';
import Carousel from 'react-elastic-carousel';
import Tarjeta from '../Tarjeta/Tarjeta';
import Tarjeta2 from '../Tarjeta/Tarjeta2';
import Tarjeta3 from '../Tarjeta/Tarjeta3';
import Tarjeta4 from '../Tarjeta/Tarjeta4';
import SaludAqui from './SaludAqui.PNG';
import { Image } from 'react-bootstrap';
import './Home.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const Home = () => {

    return (
        <div className="Nada text-align-center justify-content-center">
            <div className="d-md-block d-none">
                <Carrusel/>
                </div> 
            <br />
            <br />
            <div className="container second">
                <div className="">
                    <h6 className="titulo0"> ENCONTRÁ UN MÉDICO AHORA </h6>
                </div>
                <div className="">
                    <h1 className="Titulo">Tu salud comienza aquí</h1>
                </div>
                <div className="d-lg-block d-none">
                    <Image src={SaludAqui} className="negocio" />
                </div>
            </div>
            <div className="container second">
                <div className="">
                    <h6 className="titulo0"> SATISFACCIÓN DEL PACIENTE </h6>
                </div>
                <div className="">
                    <h4 className="Titulo01">El 72% de los pacientes dice que su
                     primer paso para encontrar un nuevo médico es buscar online.</h4>
                </div>
                <div className="">
                    <p className="text-secondary">Con tantos nuevos pacientes potenciales, la gestión de la reputación
                    de Doctor.com.ar ayuda a su práctica a proporcionar una primera
                            impresión excepcional.</p>
                </div>
            </div>
            <div className="container">
                <hr />
                <Carousel breakPoints={breakPoints}>
                    <Tarjeta4 number="1" />
                    <Tarjeta2 number="2" />
                    <Tarjeta3 number="3" />
                    <Tarjeta number="4" />
                    <Tarjeta4 number="5" />
                    <Tarjeta2 number="6" />
                    <Tarjeta3 number="7" />
                    <Tarjeta number="8" />
                </Carousel>
                <hr />
            </div>
            <div className=" container second">
                <div className="">
                    <h6 className="titulo0"> PROCESO SIMPLIFICADO </h6>
                </div>
                <div className="">
                    <h1 className="Titulo01">Reduce significativamente los casos de no presentación,
                     cancelaciones y el tiempo dedicado a llamar a los pacientes.</h1>
                </div>
                <div className="">
                    <p className="text-secondary">Los recordatorios automáticos para pacientes lo ayudan a administrar
                    y reservar citas, mientras que nuestro panel de atención médica
                    muestra las confirmaciones y todas sus métricas clave de crecimiento
                             en la práctica.</p>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Home;