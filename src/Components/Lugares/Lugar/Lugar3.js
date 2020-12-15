import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lugares.css';
import MedCare from './MedCare.jpg';
import { Image } from 'react-bootstrap';

const Lugar3 = () => {

    return (
        <React.Fragment>
            <div id="Modelo" className="lugares card mb-4 mt-5">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Med-Care</h2>
                            <p className="card-text text-secondary">El MedCare es un grupo de médicos Cardiólogos-Electrofisiólogos 
                            (especialistas en arritmias), unidos y trabajando en equipo con finalidad de brindar a la sociedad, servicios
                            de consulta médica por personal idóneo, estudios de diagnóstico y tratamiento específico de todas las 
                            variedades de arritmias cardíacas basándonos en la experiencia de nuestro recurso humano con una formación
                            y experiencia en centros pioneros en arritmias en continua actualización y, en tecnología de última generación.
                            Con esta, brindamos tratamientos específicos de manera oportuna y segura, a través de un equipo de profesionales
                            comprometidos con la salud.
                            En CIAT consideramos que el crecimiento de nuestro grupo refleja el entusiasmo en el trabajo multidisciplinario 
                            y que el mismo son los cimientos para el enfoque adecuado de la salud de los pacientes integrando a la especialidad
                            médica nutrición y psicología.
                            Todo el personal del CIAT trabaja día a día para brindarle: Calidad humana y profesionalismo.


            </p>
                        </div>
                    </div>
                    <div class="col-md-4 text-align-center justify-content-center d-flex">
                        <Image src={MedCare} className="imgcar" alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Lugar3;