import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import '../assets/style/HomeScreen.css'

const Header = () => {
  return (
    <>
      <Navbar expand='lg' sticky='top' bg="light" data-bs-theme="light"
      >
        <Container fluid >
          <LinkContainer to="/" style={{ color: 'var(--clr-darkolivegreen)'}}>
            <Navbar.Brand  className='ms-5 fs-2'>Oasis</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <LinkContainer to="/catalog/buy">
                <Nav.Link>Comprar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/catalog/rent">
                <Nav.Link>Rentar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sell">
                <Nav.Link>Vender</Nav.Link>
              </LinkContainer>
              <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUser} /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header