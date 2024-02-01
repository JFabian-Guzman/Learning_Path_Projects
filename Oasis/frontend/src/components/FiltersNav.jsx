import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PriceInput from './micro_components/PriceInput';

const FiltersNav = () => {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Estado" id="navbarScrollingDropdown">
              <Form.Check className='ms-2' type="checkbox" label="Venta" />
              <Form.Check className='ms-2' type="checkbox" label="Renta" />
            </NavDropdown>
            <NavDropdown title="Precio" id="nav-price-dropdown">
              <PriceInput />
            </NavDropdown>
            <NavDropdown title="Habitaciones" id="navbarScrollingDropdown">
              <NavDropdown.Item>1</NavDropdown.Item>
              <NavDropdown.Item>2</NavDropdown.Item>
              <NavDropdown.Item>3</NavDropdown.Item>
              <NavDropdown.Item>4</NavDropdown.Item>
              <NavDropdown.Item>5</NavDropdown.Item>
              <NavDropdown.Item>6</NavDropdown.Item>
              <NavDropdown.Item>7</NavDropdown.Item>
              <NavDropdown.Item>8</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Baños" id="navbarScrollingDropdown">
              <NavDropdown.Item>1</NavDropdown.Item>
              <NavDropdown.Item>2</NavDropdown.Item>
              <NavDropdown.Item>3</NavDropdown.Item>
              <NavDropdown.Item>4</NavDropdown.Item>
              <NavDropdown.Item>5</NavDropdown.Item>
              <NavDropdown.Item>6</NavDropdown.Item>
              <NavDropdown.Item>7</NavDropdown.Item>
              <NavDropdown.Item>8</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Propiedad" id="navbarScrollingDropdown">
              <Form.Check className='ms-2' type="checkbox" label="Casa" />
              <Form.Check className='ms-2' type="checkbox" label="Apartamento" />
              <Form.Check className='ms-2' type="checkbox" label="Condominio" />
              <Form.Check className='ms-2' type="checkbox" label="Lote" />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id='search'
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default FiltersNav