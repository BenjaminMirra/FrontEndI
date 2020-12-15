import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import { Button } from 'react-bootstrap';


const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
               <TextField className="m-2" id="filled-textarea" label="Especialidad" placeholder="Especialidad"
                multiline variant="filled" type="text" name="name" value={user.name} onChange={handleInputChange}
                 />
                 {/* <Select className="mr-5" labelId="demo-simple-select-label" id="demo-simple-select" value={user.name}
                onChange={handleInputChange}>
                <MenuItem value={10}>Alergia</MenuItem>
                <MenuItem value={20}>Cirugia</MenuItem>
                <MenuItem value={30}>Nutricion</MenuItem>
                <MenuItem value={40}>Cirugia Estetica</MenuItem>
                <MenuItem value={50}>Ginecologia</MenuItem>
                <MenuItem value={60}>Cardiologia</MenuItem>
            </Select> */}
                <TextField className="m-2" id="filled-textarea" label="Profesiona Medico" placeholder="Profesional Medico"
                multiline variant="filled" type="text" name="username" value={user.username}
                onChange={handleInputChange} />
                {/* <Select className="mr-5" labelId="demo-simple-select-label" id="demo-simple-select" value={user.username}
                onChange={handleInputChange}>
                <MenuItem value={10}>Palazzo, Eduardo</MenuItem>
                <MenuItem value={20}>Duhalde, Esteban</MenuItem>
                <MenuItem value={30}>Biagosch, Cristian</MenuItem>
                <MenuItem value={40}>Amenabar, Carlos</MenuItem>
                <MenuItem value={50}>Ruiz,Carlos</MenuItem>
                <MenuItem value={60}>Jimenez, Rogelio</MenuItem>
            </Select> */}
                <TextField className="m-2" InputLabelProps={{ shrink: true }} id="filled-textarea"
                label="Fecha" placeholder="Fecha" variant="filled" type="date" name="date" value={user.date}
                onChange={handleInputChange} />
                <TextField className="m-2" InputLabelProps={{ shrink: true }} id="filled-textarea"
                label="Hora" placeholder="Hora" variant="filled" type="time" name="time" value={user.time}
                onChange={handleInputChange} />
        <div className="container justify-content-center text-align-center mt-5">
        <Button variant="outline btn-primary mr-sm-2">Editar usuario</Button>
            <Button variant="outline btn-danger mr-sm-2">
               Cancelar
            </Button>
        </div>
    </form>
  )
}

export default EditUserForm