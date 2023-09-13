import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Register() {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder="your phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="********" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>confirm password</Form.Label>
        <Form.Control type="text" placeholder="********" />
      </Form.Group>
        <Button variant="primary">submit</Button>
        <Button variant="danger">delete</Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default Register