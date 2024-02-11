import { Image, Container, Row, Col } from 'react-bootstrap'
import Avatar from '../assets/images/avatar.jpg'

const ProfileScreen = () => {
  return (
    <>
    <Container fluid className="d-flex flex-column p-0">
      <Container fluid className=" w-100 d-flex flex-column justify-content-between py-5 align-items-center"
        style={{
        backgroundColor: '#f5f5f5',
        }}>
        <Row className="w-100 d-flex justify-content-center">
          <Row>
            <Col className='text-center'>
            <Image src={Avatar} roundedCircle  style={{ maxWidth: '10vw'}}/>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col></Col>
            <Col className='text-center'>
              <span>Nombre: <br /> John doe </span>
            </Col>
            <Col className='text-center'>
              <span>Celular: <br /> 1234-5678 </span>
            </Col>
            <Col className='text-center'>
              <span>Correo: <br /> john@email.com </span>
            </Col>
            <Col></Col>
          </Row>
        </Row>
      </Container>
      <Container fluid className="w-100">
        <h2>Favoritos</h2>
      </Container>
    </Container>
  </>
  )
}

export default ProfileScreen
