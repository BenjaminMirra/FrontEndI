import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ setPersona, persona, personas, setPersonas }) => {


  function handleChange(event) {
    // console.log("valor", event.target.value)
    // console.log("nombre", event.target.name)
    setPersona({
      ...persona,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    alert('Mensaje enviado');
    event.preventDefault()
    setPersonas([...personas, persona])
    setPersona({
      nombre: "",
      email: "",
      asunto: "",
      descrip: ""
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre">
        <Form.Label ><strong>Nombre</strong></Form.Label>
        <Form.Control type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label ><strong>Email</strong></Form.Label>
        <Form.Control type="mail"
          placeholder="Ingrese su email"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="asunto">
        <Form.Label ><strong>Asunto</strong></Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el asunto"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="descripcion">
        <Form.Label ><strong>Descripción</strong></Form.Label>
        <Form.Control
          type="textarea"
          placeholder="Ingrese una descripción"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button className="w-50 botton-center"
       variant="primary"
        type="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default Formulario

