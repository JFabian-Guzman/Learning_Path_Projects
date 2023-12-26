import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg ="dark"/*background*/ variant ="dark"
       expand="md"/*Hamburguer menu*/ collapseOnSelect>
        <Container>
          <Navbar.Brand href ="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls ="basic-navbar-nav" />
          <Navbar.Collapse id ="basic-navbar-nav">
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