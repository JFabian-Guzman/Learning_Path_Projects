import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar bg ="dark"/*background*/ variant ="dark"/*Text*/
        expand="md"/*Size to display hamburguer menu*/ collapseOnSelect>
        <Container>
          {/*Home page*/}
          <Navbar.Brand href ="/">
            <img src ={logo} alt ="ProShop"/>
            ProShop
            </Navbar.Brand>
          {/*Place the hamburguer menu*/}
          <Navbar.Toggle aria-controls ="basic-navbar-nav" />
          {/*
            Everything inside .Collapse will be inside the hamburguer menu after
            certain screen size
          */}
          <Navbar.Collapse id ="basic-navbar-nav">
            {/*Navigation Links*/}
            <Nav className='ms-auto'>
              <Nav.Link href="/cart"><FaShoppingCart/>{/*Icon*/} Cart</Nav.Link>
              <Nav.Link href="/login"><FaUser/>{/*Icon*/} Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header