import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const FormSell = () => {
  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center align-items-center'>
      {/* Location */}
      <Form.Group className="mb-3 w-50">
        <Form.Label>Ubicacion</Form.Label>
        <Form.Control type="text" placeholder="ubicacion" />
      </Form.Group>
      {/* Description */}
      <Form.Group className="mb-3 w-50">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      {/* Price */}
      <Form.Group className="mb-3 w-50">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" placeholder="precio" />
      </Form.Group>
      {/* Area */}
      <Form.Group className="mb-3 w-50">
        <Form.Label>Area del lote</Form.Label>
        <Form.Control type="text" placeholder="lote" />
      </Form.Group>
      <Form.Group className="mb-3 w-50">
        <Form.Label>Area de la casa</Form.Label>
        <Form.Control type="text" placeholder="casa" />
      </Form.Group>
      {/* Bedrooms  & Bathrooms*/}

      <Form.Group className="mb-3 w-50">
        <Form.Label>Baños y Cuartos</Form.Label>
        <Container className='d-flex 
        align-items-center
        justify-content-center'
        >
          <Form.Control type="number"
          placeholder="cuartos" className=' w-25'
          min='0' max='20'/>
          <Form.Control type="number"
          placeholder="baños" className='ms-2 w-25'
          min='0' max='20'/>
        </Container>
      </Form.Group>
      {/* Image */}
      <Form.Group className="mb-3 w-50">
        <Form.Label>Choose your images</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      {/* Rent or Sale or Rent & Sale */}
      <Form.Group className="mb-3 d-flex">
        <Form.Check type="checkbox" 
        label="Vender"/>
        <Form.Check type="checkbox"
        label="Rentar" className='ms-3' />
      </Form.Group>
      
      <Button variant="outline-success mb-5" className='w-50' type="submit">
        Listar propiedad
      </Button>
    </Form>
  )
}

export default FormSell
