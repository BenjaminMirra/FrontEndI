import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';

const AddUserForm = (props) => {
    const numeroTurno = Math.floor(Math.random() * 90);
    const initialFormState = { turn: numeroTurno ,id: null, name: '', username: '', date: '', time: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!user.name || !user.username || !user.date || !user.time) return

            props.addUser(user)
            setUser(initialFormState)
        }} >
            <div className="container">

            </div>
            <div className="row">
            <div className="col-12 d-flex justify-content-center text-align-center">
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
        
            < TextField className="m-2" id="filled-textarea" label="Profesional Medico" placeholder="Profesional Medico"
                multiline variant="filled" type="text" name="username" value={user.username}
                onChange={handleInputChange} />

                {/*<Select className="mr-5" labelId="demo-simple-select-label" id="demo-simple-select" value={user.username}
                onChange={handleInputChange}>
                <MenuItem value={10}>Palazzo, Eduardo</MenuItem>
                <MenuItem value={20}>Duhalde, Esteban</MenuItem>
                <MenuItem value={30}>Biagosch, Cristian</MenuItem>
                <MenuItem value={40}>Amenabar, Carlos</MenuItem>
                <MenuItem value={50}>Ruiz,Carlos</MenuItem>
                <MenuItem value={60}>Jimenez, Rogelio</MenuItem>
            </Select>*/}
            < TextField className="m-2" InputLabelProps={{ shrink: true }} id="filled-textarea"
                label="Fecha" placeholder="Fecha" variant="filled" type="date" name="date" value={user.date}
                onChange={handleInputChange} />

            <TextField className="m-2" InputLabelProps={{ shrink: true }} id="filled-textarea"
                label="Hora" placeholder="Hora" variant="filled" type="time" name="time" value={user.time}
                onChange={handleInputChange} />
</div>
<div className="col-12 d-flex justify-content-center text-align-center">
    <Button className="mt-5" variant="contained" color="primary" onClick={() => { props.addUser(user) }}>Tomar Turno</Button>
    </div>
        </div>
        </form>
        
    )
}

export default AddUserForm