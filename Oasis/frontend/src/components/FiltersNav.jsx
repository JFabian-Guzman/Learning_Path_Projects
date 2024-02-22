import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PriceInput from './micro_components/PriceInput';
import FilterSwitch from './micro_components/FilterSwitch';
import SeachBox from './micro_components/SeachBox';
import { useState } from 'react';

// TODO: Make this work
const FiltersNav = () => {

  const [inSale, setInSale] = useState(false);
  const [forRent, setForRent] = useState(false);

  return (
    <Navbar expand='lg' bg="light" data-bs-theme="light" className='px-5'
    style={{
    borderBottom:'1px solid black'
    }}>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavDropdown title="Estado" id="navbarScrollingDropdown">
              <Form.Check className='ms-2 flt-checkbox'
              id='sale'
              type="checkbox"
              label="Venta"
              value={inSale}
              onChange={(e) => setInSale(e.target.checked)}
              />
              <Form.Check className='ms-2 flt-checkbox'
              id='rent'type="checkbox"
              label="Renta"
              value={forRent}
              onChange={(e) => setForRent(e.target.checked)}
              />
            </NavDropdown>
            <NavDropdown title="Precio" id="navbarScrollingDropdown">
              <PriceInput />
            </NavDropdown>
            <NavDropdown title="Cuartos" id="navbarScrollingDropdown">
              < FilterSwitch />
            </NavDropdown>
            <NavDropdown title="Baños" id="navbarScrollingDropdown">
              < FilterSwitch />
            </NavDropdown>
          </Nav>
          <SeachBox type='catalog' placeholder='Provincia o Canton' />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default FiltersNav