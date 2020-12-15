import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pie.css';
import logo from './Logo.jpg';
import logoArg from './LogoArgentina.png';
import logoTuc from './LogoGobierno.svg';

const Pie = () => {

  return (
    <React.Fragment>
      <div className="barrita-abajo d-flex justify-content-center">

      </div>
      <footer className="blog-footer">
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md d-flex justify-content-center align-items-center">
              <a target="_blank" rel="noreferrer" href="https://www.argentina.gob.ar/">
                <img width="150" height="175" src={logoArg} alt="logo" />
              </a>
            </div>
            <div className="col-12 col-md d-flex justify-content-center align-items-center">
              <a target="_blank" rel="noreferrer" href="#link">
                <img width="175" height="175" src={logo} alt="logo" />
              </a>
            </div>
            <div className="col-12 col-md d-flex justify-content-center align-items-center">
              <a target="_blank" rel="noreferrer" href="https://www.tucuman.gob.ar/">
                <img src={logoTuc} alt="logo" />
              </a>
            </div>
          </div>
          <hr />
          <div className="row d-flex ">
            <div className="col-3 d-flex justify-content-center" >
              <a href="#top">
                <h5 className="text-white">Inicio</h5>
              </a>
            </div>
            <div className="col-3 d-flex justify-content-center" >
              <a href="#top">
                <h5 className="text-white">Nosotros</h5>
              </a>
            </div>
            <div className="col-3 d-flex justify-content-center" >
              <a href="#top">
                <h5 className="text-white">Tienda</h5>
              </a>
            </div>
            <div className="col-3 d-flex justify-content-center" >
              <a href="#top">
                <h5 className="text-white">Contacto</h5>
              </a>
            </div>
          </div>
          <hr />
        </div>
        <div className="row d-flex justify-content-around mt-2">
          <h5 className="text-muted">© 2020 Forum</h5>
        </div>
      </footer>
    </React.Fragment>

  );
}

export default Pie;