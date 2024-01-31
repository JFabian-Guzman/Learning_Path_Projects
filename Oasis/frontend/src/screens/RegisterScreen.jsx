import FormRegister from '../components/micro_components/FormRegister'
import { Container } from 'react-bootstrap'
import oasis from '../assets/images/oasis2_img.jpg'

const RegisterScreen = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center'
        style={{minHeight: '100vh', minWidth: '100vw'}}>
        <div className='login-wrap d-flex flex-column flex-column-reverse'>
          <div className='txt-w p-4 d-flex flex-column justify-content-start align-items-center'>
            <h1>Bienvenido<br/> a <span>Oasis</span>!</h1>
            <FormRegister />
          </div>
          <div className='img-w'>
            <img src={oasis} alt='oasis' className='p-4'/>
          </div>
        </div>
      </Container>
  )
}

export default RegisterScreen