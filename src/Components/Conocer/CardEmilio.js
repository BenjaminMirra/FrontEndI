import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar3 from './Avatar3.PNG';


function CardEmilio() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar3} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Emilio</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Full Stack Developer</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardEmilio;