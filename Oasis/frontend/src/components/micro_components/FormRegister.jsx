import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';

const FormRegister = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if ( userInfo ) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);


  const handleClick = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Las contraseñas no coinciden');
    } else {
      try {
        const res = await register({ name, email, phone, password }).unwrap();
        dispatch(setCredentials({...res,}));
        navigate(redirect);
        toast.success(`Bienvenido ${res.name}!`);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }

  }

  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center align-items-start'>
      <Form.Group className="w-100" controlId="formBasicUserName">
        <FloatingLabel
          controlId="userNameFloatingInput"
          label="Nombre de usuario"
          className="mb-3"
        >
          <Form.Control
          type="text"
          placeholder="Nombre de usuario" 
          value={name}
          onChange={(e) => {setName(e.target.value)}}/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="w-100" controlId="formBasicEmail">
        <FloatingLabel
          controlId="emailFloatingInput"
          label="Email"
          className="mb-3"
        >
          <Form.Control
          type="email"
          placeholder="Email"
          className='shadow-none'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="w-100" controlId="phone">
        <FloatingLabel
          controlId="phoneFloatingInput"
          label="Celular"
          className="mb-3"
        >
          <Form.Control
          type="text"
          placeholder="Celular"
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="custom-password w-100" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Contraseña" className='mb-3'>
          <Form.Control
          type="password"
          placeholder="Contraseña" 
          className='shadow-none'
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingConfirmPassword" label="Confirmar contraseña" className='mb-3'>
          <Form.Control
          type="password"
          placeholder="Confirmar contraseña"
          className='shadow-none'
          value={confirmPassword}
          onChange={(e) => {setConfirmPassword(e.target.value)}}/>
        </FloatingLabel>
        {/* TODO: When the user make a mistake in the password, the following message will be shown */}
        {/* <Form.Text id="passwordHelpBlock" muted>
          Su contraseña debe tener al menos 8 caracteres.<br/>
        </Form.Text> */}
      </Form.Group>
      <Button variant="outline-success mb-2" 
      className='w-100' type="submit"
      onClick={handleClick}>
        Registrarse
      </Button>
      { isLoading && <p>Registrando...</p>}
      <p>Ya tienes una cuenta?
        <Link to={ redirect ? 
            `/login?redirect=${redirect}` :
            '/login'}>
          <span>Inicia sesion aquí</span>
        </Link>
      </p>
    </Form>
  )
}

export default FormRegister