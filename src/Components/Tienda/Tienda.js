import React from 'react';
import Venta from './Venta';
import './Tienda.css';


const Tienda = () => {

    return (
        <React.Fragment>
            <div className="contenedor">
                <div className="card-deck m-2">
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                </div>
                <div className="card-deck m-2">
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                </div>
                <div className="card-deck m-2">
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                    <div className="card m-2 rounded-0"><Venta /></div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Tienda;
