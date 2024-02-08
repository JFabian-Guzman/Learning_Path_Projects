import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

const FormRegister = () => {

  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center align-items-start'>
      <Form.Group className="w-100" controlId="formBasicUserName">
        <FloatingLabel
          controlId="userNameFloatingInput"
          label="Nombre de usuario"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Nombre de usuario" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="w-100" controlId="formBasicEmail">
        <FloatingLabel
          controlId="emailFloatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Email" className='shadow-none' />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="w-100" controlId="phone">
        <FloatingLabel
          controlId="phoneFloatingInput"
          label="Celular"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Celular" />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="custom-password w-100" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-3'>
          <Form.Control type="password" placeholder="Contraseña" className='shadow-none' />
        </FloatingLabel>
        <FloatingLabel controlId="floatingConfirmPassword" label="Confirmar contraseña" className='mb-3'>
          <Form.Control type="password" placeholder="Confirmar contraseña" className='shadow-none' />
        </FloatingLabel>
        {/* TODO: When the user make a mistake in the password, the following message will be shown */}
        {/* <Form.Text id="passwordHelpBlock" muted>
          Su contraseña debe tener al menos 8 caracteres.<br/>
        </Form.Text> */}
      </Form.Group>
      <Button variant="outline-success mb-2" className='w-100' type="submit">
        Registrarse
      </Button>
      <p>Ya tienes una cuenta?
        <Link to='/login'><span>Inicia sesion aquí</span></Link>
      </p>
    </Form>
  )
}

export default FormRegister