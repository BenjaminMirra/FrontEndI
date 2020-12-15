import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lugares.css';
import { Image } from 'react-bootstrap';
import Mayo from './Mayo.jpg';

const Lugar1 = () => {

    return (
        <React.Fragment>
            <div id="Mayo" className="lugares card mb-4 mt-5">
                <div className="row no-gutters">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Clínica de Mayo</h2>
                            <p className="card-text text-secondary">Como sanatorio polivalente tiene a la honestidad y calidad médica 
                            como objetivos principales. Su Comisión Directiva tiene a cargo el control y destino de esta 
                            Institución. Dentro de un marco altamente competitivo, Clínica Mayo de UMCB SRL ha permanecido 
                            en la vanguardia de la atención del enfermo y el cuidado de la salud, preservando los principios 
                            éticos y aceptando y participando del desafío permanente de la evolución en medicina. Estos preceptos, 
                            fundamentan el prestigio de su nombre. Y en este cambio lo que está en juego es la futura calidad 
                            de vida.
                            <br/>
                            El adecuado acompañamiento de enfermería, capacidad instalada para responder a todo necesidad tanto 
                            tecnológica como en profesionales especialistas, el confort y el estricto cumplimiento de normas 
                            biomédicas y de higiene, respaldan a Clínica Mayo de UMCB SRL como institución médica confiable y segura.
                            </p>
                        </div>
                    </div>
                
                    <div class="col-md-4 text-align-center justify-content-center d-flex">
                        <Image src={Mayo} className="imgcar" alt=""/>
                     </div>
                </div>
            </div>
        
        </React.Fragment>
    );
}

export default Lugar1;