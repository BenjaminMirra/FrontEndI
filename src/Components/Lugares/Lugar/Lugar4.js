import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lugares.css';
import Modelo from './Modelo.jpeg';
import { Image } from 'react-bootstrap';

const Lugar4 = () => {

    return (
        <React.Fragment>
            <div id="Modelo" className="lugares card mb-4 mt-5">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Sanatorio Modelo</h2>
                            <p className="card-text text-secondary">Somos una institución comprometida con la calidad en la prestación del 
                            servicio médico-asistencial. Queremos brindarle una cálida atención personalizada, ponemos a su disposición 
                            nuestro destacado nivel médico, profesional y tecnológico. Nuestro compromiso con la vida y la dignidad humana 
                            es genuino, tenemos como misión dar una respuesta integral a sus necesidades y seguir creciendo constantemente 
                            para ser el Sanatorio que usted se merece. Asumimos el compromiso de actuar en un ambiente cálido y agradable, 
                            brindar atención diferencial y especializada, contribuyendo al desarrollo del conocimiento médico en beneficio 
                            de la comunidad.
                            El Sanatorio Modelo S.A. cuenta con un servicio de atención personalizada de calidad, pone a disposición de sus 
                            clientes-pacientes un amplio abanico de recursos humanos, materiales y tecnológicos de alto nivel. 

            </p>
                        </div>
                    </div>
                    <div class="col-md-4 text-align-center justify-content-center d-flex">
                        <Image src={Modelo} className="imgcar" alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Lugar4;