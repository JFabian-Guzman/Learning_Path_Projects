import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';
import {resetCart} from '../slices/cartSlice'

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      // Clear local storage
      dispatch(logout());
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

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
              <SearchBox />
            <LinkContainer to ="/cart">
              <Nav.Link>
                <FaShoppingCart/>{/*Icon*/} Cart
                {
                  cartItems.length > 0 && (
                    <Badge pill bg='success' style={{marginLeft:'5px'}}>
                      { cartItems.reduce((a,c) => a + c.qty, 0)}
                    </Badge>
                  )
                }
              </Nav.Link>
            </LinkContainer>
            { userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to ="/login">
              <Nav.Link><FaUser/>{/*Icon*/} Sign In</Nav.Link>
              </LinkContainer>
            )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminMenu'>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header