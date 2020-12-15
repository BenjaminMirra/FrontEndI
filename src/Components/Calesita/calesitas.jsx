import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carrusel.css'

class Carrusel extends React.Component{

    render(){
        return(
            <Carousel>
                <Carousel.Item>
                <img
                    className="carrusel d-block w-100"
                    src="https://vivo247.com/wp-content/uploads/2020/05/centro-medico-e-grupo-orono-22052020in1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="tituloo">TODOS LOS SANATORIOS Y CLÍNICAS</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="carrusel  d-block w-100"
                    src="https://www.ideailuminacion.com.ar/wp-content/uploads/2016/11/vitus-ii-ph-g-viramonte-163-1.jpg"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3 className="tituloo">TURNOS MÉDICOS ONLINE</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="carrusel d-block w-100"
                    src="https://www.hospitalaleman.org.ar/wp-content/uploads/2017/06/institucional.jpg"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3 className="tituloo">COMODIDAD Y SERVICIO</h3>                
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}


export default Carrusel;