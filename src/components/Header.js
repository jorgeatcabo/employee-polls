import {connect} from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'



const Header = (props) => {
 
  console.log(props)
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
              <LinkContainer to="">
                <Nav.Link>Leaderboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add">
                <Nav.Link>New Poll</Nav.Link>
              </LinkContainer>      
              <Nav.Link>User: {props.authedUser}</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
    </header>
    
  );

  
};
const mapStateToProps = ({ authedUser, users }) => {

  const avatarURL=users[authedUser].avatarURL
  return{
    authedUser,
    avatarURL,
}
}


export default connect(mapStateToProps)(Header);
