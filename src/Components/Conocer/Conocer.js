import React from 'react';
import CardGuerra from './CardGuerra';
import CardEmilio from './CardEmilio';
import CardAlejo from './CardAlejo';
import CardJose from './CardJose';
import CardIgnacio from './CardIgnacio';
import { Image } from 'react-bootstrap'
import Tech from './Tecnologia.png';
import Vision from './Vision.png';
import Experto from './Experto.PNG';
import './Conocer.css';


const Conocer = () => {

    return (
        <React.Fragment>
            <div className="container quienesSomos">
                <h1 className="quieneSomos"> Conócenos un poco mas</h1>
            <hr/>
            </div>

            <div className="container">
                <div className="card-deck m-5 row d-flex justify-content-center">
                    <CardAlejo />
                    <CardGuerra />
                    <CardEmilio />
                    <CardIgnacio />
                    <CardJose />
                </div>

            </div>

            <div className="container d-none d-md-block">
                <hr />
                <div className="row">
                    <div className="col-6 arregloMargin ">
                        <h6 className="titulo0"> Innovando </h6>
                        <h1 className="Titulo">Personas, procesos y tecnología</h1>
                        <p className="text-secondary">
                            Mirá la innovación continua que aportamos al crecimiento
                            de la práctica de la salud y la diferencia que hace para
                            los médicos.
                        </p>
                    </div>
                    <div className="col-6 d-none d-md-block">
                        <Image src={Experto} className="experto" />
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <h6 className="titulo0"> Nuestros Pilares </h6>
                <h1 className="titulo1 ">Estamos uniendo TODO</h1>
                <div className="primerPrimerCard">
                    <p className="text-secondary">
                        Con un personal dinámico, un proceso comprobado
                        y la tecnología adecuada, Forum continúa ayudando
                        a los médicos a tener éxito y a mejorar la experiencia
                        del paciente.
                     </p>
                </div>
                <hr />
            </div>

            <div className="container  d-none d-md-block">
                <div className="row d-flex text-align-center">
                    <div className="col-6 d-none d-md-block">
                        <Image src={Vision} className="vision" />
                    </div>
                    <div className="col-6">
                        <h6 className="titulo0">Personas</h6>
                        <h1 className="titulo1">5 emprendedores con una visión: ayudar a la gente a prosperar.</h1>
                        <p className="text-secondary">Somos un equipo de emprendedores con experiencia
                        en distintas disciplinas. Ante la dificultad de
                        encontrar un turno en los centros médicos, cada vez más saturados
                        y repletas por la necesidad médica, llegó Forum,
                        una plataforma que permite planificar, reservar y
                        pre reservar un turno.
            </p>
                        <p className="text-secondary texto4">Estamos seguros que con esta herramienta estamos ayudando
                        para hacer más cómoda la vida de la gente y su forma de organizarse,
                        haciendo a su vez más eficiente la movilidad en una gran ciudad
                        como es San Miguel de Tucumán y colaborando para convertirla en una Smart City;
                        y todo esto, con solo un clic
            </p>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container  d-none d-md-block">
                <div className="row d-flex text-align-center">
                    <div className="col-6">
                        <h6 className="titulo0">Tecnología</h6>
                        <h1 className="titulo1">Una plataforma segura, adaptable y escalable</h1>
                        <p className="text-secondary">
                            Impulsamos los resultados para la práctica con una plataforma
                            diseñada específicamente para proveedores, centrándonos en las áreas
                            críticas del crecimiento de la práctica, desde una presencia web superior
                            y SEO hasta estrategias de marekting de contenido probadas.
                    </p>
                        <p className="text-secondary">
                            Cada punto de contacto digital está optimizado para computadores de escritorio
                            y móviles, garantizando una experiencia moderna y conveniente. A medida
                            que crece, aprovechamos nuestros datos de propiedad para determinar las
                            estrategias correctas, mientras evolucionamos continuamente las ofertas
                            basadas en la nube.
                    </p>
                    </div>
                    <div className="col-6 d-none d-md-block">
                        <Image src={Tech} className="tecnologia" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}

export default Conocer;
