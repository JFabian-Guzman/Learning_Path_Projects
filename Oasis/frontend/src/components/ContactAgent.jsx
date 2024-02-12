import { Container, Button, Form, CloseButton } from "react-bootstrap";
import '../assets/style/ContactModal.css';

const ContactAgent = ( {open, onClose, email} ) => {
  if (!open) return null;
  return (
    <>
      <Container onClick={onClose} className="overlay">
        <Container onClick={(e)=> {
          e.stopPropagation();
        }} className="modalContainer">
          <CloseButton onClick={onClose} className="position-absolute top-0 end-0 p-3" />
          <h4 className='mb-4' style={{color: 'var(--clr-forestgreen)'}}>Contactar Agente</h4>
          <p><span className="fw-semibold">Para: </span>{email}</p>
          <Form className="d-flex flex-column gap-1">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Celular</Form.Label>
              <Form.Control type="text" placeholder="Celular" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button variant="success" className="w-100" type="submit">
              Contactar
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  )
}

export default ContactAgent
