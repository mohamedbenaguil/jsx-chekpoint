import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './Login1';

function Login() {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="********" />
      </Form.Group>
        <Button variant="primary">submit</Button>
        <Button variant="danger">delete</Button>

      </Card.Body>
    </Card>
    </div>
  )
}

export default Login