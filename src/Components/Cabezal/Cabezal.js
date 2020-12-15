import React from 'react';
import './Cabezal.css'

const Cabezal = () => {

    return (
        <React.Fragment>
            <div className="container d-none d-md-block">
                <div className="row">
                    <div className="col m-2  d-flex justify-content-center align-items-center" id="area1"
                    >
                        <div>
                            <h1 className="text-dark columna-text"> ¡Si todavía no tienes una cuenta registraste! </h1>
                            <button className=" outline btn-primary mr-sm-2 btn-sm btn-default p-2 m-0"
                            >Iniciar Sesión</button>
                            <button className=" outline btn-warning mr-sm-2 btn-sm btn-default p-2 m-0"
                            >Registrarse</button>

                        </div>
                    </div>
                    <div className="col">
                        <div className="row m-2 p-2 d-flex justify-content-center align-items-center" id="area2"
                        >
                            <h1 className=" text-dark "> ¡Comparte para obtener beneficios! </h1>
                            <button className="btn-success btn-sm btn-default p-2 m-0"
                            >Compartir</button>

                        </div>
                        <div className="row m-2 p-2 d-flex justify-content-center align-items-center " id="area3"
                        >
                            <h1 className=" text-dark "> ¿Le regalarías un Café al equipo? </h1>
                            <button className="btn-success btn-sm btn-default p-2 m-0"
                            >Regalar Café</button>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cabezal;