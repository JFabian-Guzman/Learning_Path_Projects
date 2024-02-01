import '../assets/style/Login&RegisterScreen.css'
import { Container} from 'react-bootstrap'
import oasis from '../assets/images/oasis_img.jpg'
import FormLogin from '../components/micro_components/FormLogin'

const LogInScreen = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center'
        style={{minHeight: '100vh', minWidth: '100vw'}}>
        <div className='login-wrap d-flex flex-column flex-column-reverse'>
          <div className='txt-w p-4 d-flex flex-column justify-content-start align-items-center'>
            <h1>Bienvenido<br/> a <span>Oasis</span>!</h1>
            <FormLogin />
          </div>
          <div className='img-w'>
            <img src={oasis} alt='oasis' className='p-4'/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default LogInScreen