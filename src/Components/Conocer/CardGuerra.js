import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar2 from './Avatar2.PNG';


function CardGuerra() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar2} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Benjamín</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Full Stack Developer</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardGuerra;