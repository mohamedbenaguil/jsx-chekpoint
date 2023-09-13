import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Example from './Addproduit';


function ColorSchemesExample({khalil}) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Shoplist">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link>
         <Nav.Link href="/Login1">Login1</Nav.Link>
         <Nav.Link href="/Register1">Register1</Nav.Link>
            
            <Example khalil={khalil}/>
          </Nav>
        </Container>
      </Navbar>
      <br />
      

      <br />
      
    </>
  );
}

export default ColorSchemesExample;