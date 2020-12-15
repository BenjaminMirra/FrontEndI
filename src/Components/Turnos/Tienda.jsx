import React, { useState } from 'react';
import Tabla from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import './Turnos.css';
import { Image } from 'react-bootstrap';
import Pasos from './Pasos.PNG';


const Market = ({ users, setUsers }) => {

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false);
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (

    <div className="container">
      <h1 className="justify-content-center text-aling-center d-flex mt-5 Titulo">TURNOS</h1>
      <hr/>
      <div className="d-lg-block d-none">
        <h1 className="justify-content-center text-aling-center d-flex mt-5">¿Cómo funciona?</h1>
        <div className="row justify-content-center text-aling-center d-flex">
          <Image src={Pasos}></Image>
        </div>
        <div className="flex-row">
          <div className="flex-large col-12 justify-content-center text-aling-center d-flex mt-5">
            {editing ? (
              <div className="row">
                <div className="justify-content-center text-aling-center d-flex mt-5 col-12">
                  <h2 className="Titulo">Editar Usuario</h2>
                </div>
                <div className="justify-content-center text-aling-center d-flex col-12">
                  <EditUserForm
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              </div>
            ) : (
                <div className="row">
                  <div className="justify-content-center text-aling-center d-flex mt-3 col-12">
                    <h2 className="Titulo">Turnos Médicos</h2>
                  </div>
                  <div className="justify-content-center text-aling-center d-flex col-12">
                    <AddUserForm addUser={addUser} />
                  </div>
                </div>
              )}
          </div>
          <div className="row">
            <div className="justify-content-center text-aling-center d-flex mt-5 col-12">
              <h2 className="Titulo">Turnos Asignados</h2>
            </div>
            <div className="col-12 justify-content-center text-aling-center d-flex">
              <Tabla users={users} editRow={editRow} deleteUser={deleteUser} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h4 className="justify-content-center text-aling-center d-flex">Proximamente para versión Móvil</h4>
        <hr/>
      </div>
    </div>
  );
}


export default Market;