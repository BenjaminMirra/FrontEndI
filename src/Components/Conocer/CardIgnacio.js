import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar5 from './Avatar5.PNG';


function CardIgnacio() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar5} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Ignacio</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Full Stack Developer</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardIgnacio;