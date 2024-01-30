import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center align-items-start'>
      <Form.Group className="mb-5 w-100" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Email" className='shadow-none' />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="custom-password w-100" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-3'>
          <Form.Control type="password" placeholder="Contraseña" className='shadow-none' />
        </FloatingLabel>
        {/* TODO: When the user make a mistake in the password, the following message will be shown */}
        {/* <Form.Text id="passwordHelpBlock" muted>
          Su contraseña debe tener al menos 8 caracteres.<br/>
        </Form.Text> */}
      <Form.Group controlId="formBasicCheckbox" className='mb-5 d-flex justify-content-between flex-column form-group'>
        <Form.Check type="checkbox" label="Recordarme"/>
        <Link to='/reset_password'><span>olvido su contraseña?</span></Link>
      </Form.Group>
      </Form.Group>
      <Button variant="outline-success" className='w-100' type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormLogin