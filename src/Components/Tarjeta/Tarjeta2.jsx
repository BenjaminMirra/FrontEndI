import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import card1 from "./Norte.png";
import { Link } from 'react-router-dom';

const Tarjeta = ({ number }) =>

  <div className='card'>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="Modelo"
        height="270"
        image={card1}
        title="Modelo"
      />
    </CardActionArea>
    <CardActions>

      <Link to="/lugares">
        <Button className="mb-3" variant="contained" color="secondary">
          NOSOTROS
        </Button>
      </Link>
      <Link to="/turnos">
        <Button className="mb-3" variant="contained" color="primary">
          SACAR TURNO
        </Button>
      </Link>
    </CardActions>
  </div>
export default Tarjeta;