import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import '../assets/style/HomeScreen.css'
import { useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Header = () => {

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [ logoutApi ] = useLogoutMutation();


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await logoutApi().unwrap();
      dispatch(logout());
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <>
      <Navbar expand='lg' sticky='top' bg="light" data-bs-theme="light"
      >
        <Container  >
          <LinkContainer to="/" style={{ color: 'var(--clr-darkolivegreen)'}}>
            <Navbar.Brand  className='ms-5 fs-2'>Oasis</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <LinkContainer to="/catalog">
                <Nav.Link>Comprar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sell">
                <Nav.Link>Vender</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={`${userInfo.name}`} >
                  <LinkContainer to="/profile">
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/favorites">
                  <NavDropdown.Item>Favoritos</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                  onClick={handleClick}>Salir de la sesión</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUser} /></Link>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header