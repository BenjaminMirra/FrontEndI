import { Card, Button, Image } from 'react-bootstrap';
import './CardVenta.css';


function CardVenta(props) {

    return (
        <div class="container-fluid sombra">
            <br/>
                <Card.Body>
                    <Card.Header>
                        <h3>PRODUCT</h3>
                    </Card.Header>
                    <Card.Title>
                        <Image src="https://picsum.photos/175/200?grayscale" rounded/>
                        </Card.Title>
                    <Card.Text>
                       <ul class="list-group">
                        <li class="list-group-item">Descripción: {props.character.height}</li>
                        <li class="list-group-item">Precio: {props.character.height}</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Agregar al Carrito</Button>
                </Card.Body>
        </div>
    );
}

export default CardVenta;