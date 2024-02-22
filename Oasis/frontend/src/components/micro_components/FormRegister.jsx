import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Load from './Load';
import Container from 'react-bootstrap/Container';
import { validateRegister } from '../../utils/FormValidation';

const FormRegister = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if ( userInfo ) {
      navigate('/');
    }
  }, [userInfo, navigate]);


  const sendRegister = async () => {
    if (password !== confirmPassword) {
      return toast.error('Las contraseñas no coinciden');
    } else {
      try {
        const res = await register({ name, email, phone, password }).unwrap();
        dispatch(setCredentials({...res,}));
        navigate('/');
        toast.success(`👋 Hola ${res.name}!`,{icon: false});
      } catch (err) {
        toast.error('Error al registrarse');
      }
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(validateRegister(email, password, name, phone, confirmPassword));
    if (!errors){
      sendRegister();
    }
  }

  return (
    <Form className='w-100 h-100 form
    d-flex flex-column justify-content-center align-items-start'
    onSubmit={handleRegister}>
      <Form.Group className="w-100 mb-3" controlId="formBasicUserName">
        <FloatingLabel
          controlId="userNameFloatingInput"
          label="Nombre de usuario"
        >
          <Form.Control
          type="text"
          placeholder="Nombre de usuario" 
          value={name}
          onChange={(e) => {setName(e.target.value)}}/>
        </FloatingLabel>
        {errors.name && <Form.Text className='text-danger'>{errors.name}</Form.Text>}
      </Form.Group>

      <Form.Group className="w-100 mb-3" controlId="formBasicEmail">
        <FloatingLabel
          controlId="emailFloatingInput"
          label="Email"
        >
          <Form.Control
          type="email"
          placeholder="Email"
          className='shadow-none'
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}/>
        </FloatingLabel>
        {errors.email && <Form.Text className='text-danger'>{errors.email}</Form.Text>}
      </Form.Group>

      <Form.Group className="w-100 mb-3" controlId="phone">
        <FloatingLabel
          controlId="phoneFloatingInput"
          label="Celular"
        >
          <Form.Control
          type="text"
          placeholder="Celular"
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}/>
        </FloatingLabel>
        {errors.phone && <Form.Text className='text-danger'>{errors.phone}</Form.Text>}
      </Form.Group>

      <Form.Group className="custom-password w-100 mb-3" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingPassword" label="Contraseña">
          <Form.Control
          type="password"
          placeholder="Contraseña" 
          className='shadow-none'
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}/>
        </FloatingLabel>
        {errors.password && <Form.Text className='text-danger'>{errors.password}</Form.Text>}
      </Form.Group>
      <Form.Group className="custom-password w-100 mb-5" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingConfirmPassword" label="Confirmar contraseña">
          <Form.Control
          type="password"
          placeholder="Confirmar contraseña"
          className='shadow-none'
          value={confirmPassword}
          onChange={(e) => {setConfirmPassword(e.target.value)}}/>
        </FloatingLabel>
        {errors.confirmPassword && <Form.Text className='text-danger'>{errors.confirmPassword}</Form.Text>}
      </Form.Group>
      <Button variant="outline-success mb-2" 
      className='w-100' type="submit">
        {isLoading ? <Container className='position-relative'><Load /></Container> :
          <span>Registrarse</span>}
      </Button>
      { isLoading && <p>Registrando...</p>}
      <p>Ya tienes una cuenta?
        <Link to='/login'>
          <span>Inicia sesion aquí</span>
        </Link>
      </p>
    </Form>
  )
}

export default FormRegister