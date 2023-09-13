import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example({khalil}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [quantity,setQuantity]=useState(0)
const [color,setColor]=useState("")

const addproduit=()=>{
  var change={name:name, price:price, quantity:quantity, color:color }
  localStorage.setItem("produit", JSON.stringify(change))
  handleClose()
  khalil()
}

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginLeft:"1000px"}}>
       Add produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Name"
                autoFocus
                onChange={(e)=>setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>quantity</Form.Label>
              <Form.Control
                type="email"
                placeholder="quantity"
                autoFocus
                onChange={(e)=>setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="email"
                placeholder="price"
                autoFocus
                onChange={(e)=>setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>color</Form.Label>
              <Form.Control
                type="email"
                placeholder="color"
                autoFocus
                onChange={(e)=>setColor(e.target.value)}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>addproduit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;