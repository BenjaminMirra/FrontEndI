import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lugares.css';
import { Image } from 'react-bootstrap';
import Norte from './Norte.png';

const Lugar2 = () => {

    return (
        <React.Fragment>
            <div id="Norte" className="lugares card mb-4 mt-5">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Sanatorio del Norte</h2>
                            <p className="card-text text-secondary">El Servicio de Traumatología y Ortopedia del Sanatorio del Norte
                            fue creado en el año 1.991 y es el primer servicio privado de la especialidad reconocido por la Asociación
                            Argentina de Ortopedia y Traumatología en el Noroeste Argentino.
                            En la actualidad es considerado uno de los más importantes de la Argentina y también de Latinoamérica. 
                            Actualmente el servicio funciona con sectores dedicados a las diferentes sub-especialidades a cargo de 
                            prestigiosos especialistas certificados en cada una de ellas, abarcando en conjunto el estudio y tratamiento 
                            de todas las patologías.
                            <br/>
                            El Servicio de Traumatología y Ortopedia desarrolla sus actividades en el Sanatorio del Norte SRL, ubicado 
                            en la calle Maipú 617 de la ciudad de San Miguel de Tucumán, en la República Argentina.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4 text-align-center justify-content-center d-flex">
                        <Image src={Norte} className="imgcar" alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Lugar2;