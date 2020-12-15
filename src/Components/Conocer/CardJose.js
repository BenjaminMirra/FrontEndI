import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import AvatarGuerra from './Avatar1.PNG';


function CardJose() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={AvatarGuerra} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Jose</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Full Stack Developer</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardJose;