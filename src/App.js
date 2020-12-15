import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Barra/Barra.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Contacto from './Components/Contacto/Contacto';
import Turnos from './Components/Turnos/Tienda';
import Conocer from './Components/Conocer/Conocer';
import Home from './Components/Home/Home';
import Pie from './Components/Pie/Pie';
import Sticky from './Components/Sticky/Sticky';
import Barra from './Components/Barra/Barra';
import Lugares from './Components/Lugares/Lugares';
import {useLocalStorage} from './Components/Turnos//useLocalStorage';



function App() {

  
  const [users, setUsers] = useLocalStorage('users', '');

  return (
    <Router>
      <Switch>
      <React.Fragment>
        <Barra />
        {/*funciona como switch case buscando el path */}
        <Route path="/" exact><Home/></Route>
        <Route path='/conocenos'><Conocer /></Route>
        <Route path="/turnos" render={(props) => <Turnos {...props} users={users} setUsers={setUsers} />} />
        <Route path='/lugares'><Lugares/></Route>
        <Route path='/contacto'><Contacto /></Route>
        <Pie />
        <Sticky/>
      </React.Fragment>
    </Switch>
    </Router>
  );
}

export default App;
