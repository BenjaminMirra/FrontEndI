import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lugar1 from './Lugar/Lugar1';
import Lugar2 from './Lugar/Lugar2';
import Lugar3 from './Lugar/Lugar3';
import Lugar4 from './Lugar/Lugar4';

const Lugares = () => {

    return (
        <div>
            <div className="container mt-5 text-align-center justify-content-center d-flex">
                <h1 className="Titulo">
                    Lugares Afiliados
                </h1>
            </div>
            <Lugar1/>
            <Lugar2/>
            <Lugar3/>
            <Lugar4/>
        </div>
    );
}

export default Lugares;