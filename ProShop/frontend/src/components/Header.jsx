import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg ="dark"/*background*/ variant ="dark"/*Text*/
        expand="md"/*Size to display hamburguer menu*/ collapseOnSelect>
        <Container>
          {/*Home page*/}
          <LinkContainer to ="/">
            <Navbar.Brand>
              <img src ={logo} alt ="ProShop"/>
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          {/*Place the hamburguer menu*/}
          <Navbar.Toggle aria-controls ="basic-navbar-nav" />
          {/*
            Everything inside .Collapse will be inside the hamburguer menu after
            certain screen size
          */}
          <Navbar.Collapse id ="basic-navbar-nav">
            {/*Navigation Links*/}
            <Nav className='ms-auto'>
            <LinkContainer to ="/cart">
              <Nav.Link><FaShoppingCart/>{/*Icon*/} Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to ="/login">
              <Nav.Link><FaUser/>{/*Icon*/} Sign In</Nav.Link>
            </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header