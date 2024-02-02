import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const FormSell = () => {
  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center
    align-items-center'
    style={{background: 'var(--clr-honeydew)'}}>
      {/* Location */}
      <Form.Group className="mb-3 mt-5 w-50">
        <FloatingLabel controlId="locationFloatingInput" label="Ubicación" className="mb-3">
          <Form.Control type="text" placeholder="Ubicación" />
        </FloatingLabel>
      </Form.Group>
      {/* Description */}
      <Form.Group className="mb-3 w-50">
        <FloatingLabel controlId="descriptionFloatingTextarea" label="Descripción">
          <Form.Control
            as="textarea"
            placeholder="Descripción"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form.Group>
      {/* Price */}
      <Form.Group className="mb-3 w-50">
        <FloatingLabel controlId="valueFloatingInput" label="Valor" className="mb-3">
          <Form.Control type="text" placeholder="Valor" />
        </FloatingLabel>
      </Form.Group>
      {/* Area */}
      <Form.Group className="mb-3 w-50">
        <FloatingLabel controlId="landFloatingInput" label="Área del lote" className="mb-3">
          <Form.Control type="text" placeholder="Lote" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3 w-50">
      <FloatingLabel controlId="houseFloatingInput" label="Área de la casa" className="mb-3">
          <Form.Control type="text" placeholder="Lote" />
        </FloatingLabel>
      </Form.Group>
      {/* Bedrooms  & Bathrooms*/}

      <Form.Group className="mb-3 w-50">
        <span>Baños y cuartos</span>
        <Container className='d-flex 
        align-items-center
        justify-content-center'
        >
          <Form.Control type="number"
          placeholder="cuartos" id='roomNumberInput' 
          className=' w-25'
          min='0' max='20'/>
          <Form.Control type="number" id='bathroomNumberInput' 
          placeholder="baños" className='ms-2 w-25'
          min='0' max='20'/>
        </Container>
      </Form.Group>
      {/* Image */}
      <Form.Group className="mb-3 w-50">
        <span>Seleccionar imagenes</span>
        <Form.Control className='mt-3' id='imagesInput' type="file" multiple />
      </Form.Group>
      {/* Rent or Sale or Rent & Sale */}
      <Form.Group className="mb-3 d-flex">
        <Form.Check id='sellCheckBox' type="checkbox" 
        label="Vender"/>
        <Form.Check id='rentCheckBox' type="checkbox"
        label="Rentar" className='ms-3' />
      </Form.Group>
      
      <Button variant="outline-dark mb-5" className='w-50' type="submit">
        Listar propiedad
      </Button>
    </Form>
  )
}

export default FormSell
