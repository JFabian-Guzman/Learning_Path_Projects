import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Load from './Load';

const FormLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if ( userInfo ) {
      navigate('/');
    }
  }, [userInfo, navigate]);
    

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({...res,}));
      navigate('/');
      toast.success(`👋 Hola ${res.name}!`,{icon: false});
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center align-items-start'>
      <Form.Group className="mb-5 w-100" controlId="formBasicEmail">
        <FloatingLabel
          controlId="emailFloatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="Email"
            className='shadow-none'
            onChange={(e) => setEmail(e.target.value)}
            />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="custom-password w-100" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-3'>
          <Form.Control
          type="password"
          placeholder="Contraseña"
          className='shadow-none'
          onChange={(e) => setPassword(e.target.value)}
          />
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
      <Button onClick={handleClick} variant="outline-success" className='w-100 mb-2' type="submit"
      disabled={isLoading}>
        {isLoading ? <Container className='position-relative'><Load /></Container> :
          <span>Iniciar sesión</span>}
      </Button>

      <p className='position-relative'>No tienes una cuenta?
        <Link to='/register'><span>Registrate aquí</span></Link>
      </p>
    </Form>
  )
}

export default FormLogin