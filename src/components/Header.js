import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'



const Header = () => {
  return (
    <header>
    <Navbar bg="light" variant="light">
        <Container>
        <LinkContainer to="/">
  <Navbar.Brand>Employee Polls</Navbar.Brand>
  </LinkContainer>
          <Nav className="me-auto">
          <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/new">
      <Nav.Link>New Poll</Nav.Link>
      </LinkContainer>
      
          </Nav>
        </Container>
      </Navbar>
    {/* <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Tweet</Link>
        </li>
      </ul>
    </nav> */}
    </header>
    
  );
};

export default Header;
