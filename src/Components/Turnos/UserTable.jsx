import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import './Turnos.css';

const Tabla = (props) => {

  return (
    <div className="Tabla">
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell className="tablita">
              <h4 className="justify-content-center text-aling-center d-flex">
                Turno</h4>
              </TableCell>
            <TableCell className="tablita">
              <h4 className="justify-content-center text-aling-center d-flex">
                Especialidad</h4>
              </TableCell>
            <TableCell className="tablita">
              <h4 className="justify-content-center text-aling-center d-flex">
                Profesional Medico</h4>
              </TableCell>
            <TableCell className="tablita">
              <h4 className="justify-content-center text-aling-center d-flex">
                Fecha</h4>
              </TableCell>
            <TableCell className="tablita">
              <h4 className="justify-content-center text-aling-center d-flex">
                Hora</h4>
              </TableCell>
            <TableCell className="tablita">
              <h4 className="justify-content-center text-aling-center d-flex">
                Acciones</h4>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {props.users ? (
          props.users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="tablita">
                <h6 className="d-flex justify-content-center">{user.turn}</h6>
                </TableCell>
              <TableCell className="tablita">
                <h6 className="d-flex justify-content-center">{user.name}</h6>
                </TableCell>
              <TableCell className="tablita">
                <h6 className="d-flex justify-content-center">{user.username}</h6>
                </TableCell>
              <TableCell className="tablita">
                <h6 className="d-flex justify-content-center">{user.date}</h6>
                </TableCell>
              <TableCell className="tablita">
                <h6 className="d-flex justify-content-center">{user.time}</h6>
                </TableCell>
              <TableCell className="tablita botonCancelarEditar">
              <Button variant="contained" color="warning" onClick={() => { props.editRow(user) }}>Editar Turno</Button>
              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => { props.deleteUser(user.id) }}>Cancelar Turno</Button></TableCell>
            </TableRow>
          ))
        ) : (
            <TableRow>
              <TableCell colSpan={3}>No tiene Turnos Asignados</TableCell>
            </TableRow>
          )}
      </TableBody>
      </Table>
</TableContainer>
<br/>
</div>
  )
}
export default Tabla