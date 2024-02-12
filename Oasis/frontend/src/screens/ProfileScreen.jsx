import { Image, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CardSpecs from '../components/micro_components/CardSpecs'

const ProfileScreen = () => {

  const myFavorites = useSelector((state) => state.myFavorites);
  const {favorites} = myFavorites;

  const { userInfo } = useSelector((state) => state.auth);

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
            <Image src={userInfo.image} roundedCircle  style={{ maxWidth: '10vw'}}/>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col></Col>
            <Col className='text-center'>
              <span>Nombre: <br /> {userInfo.name} </span>
            </Col>
            <Col className='text-center'>
              <span>Celular: <br /> {userInfo.phone} </span>
            </Col>
            <Col className='text-center'>
              <span>Correo: <br /> {userInfo.email} </span>
            </Col>
            <Col></Col>
          </Row>
        </Row>
      </Container>
      <h2 className='mt-5 ms-4' style={{color:'var(--clr-darkolivegreen)'}}>Favoritos</h2>
      <Container fluid
        className='d-flex flex-column align-items-between
        justify-content-center px-5 last-listed-container mt-5'>

        <Row xs={1} md={2} lg={3} className="g-5 mb-5 d-flex justify-content-center align-items-center">
          {favorites.map((house) => (
            <Col key={house._id} className='d-flex justify-content-center align-items-center'>
              <CardSpecs home={house}/>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  </>
  )
}

export default ProfileScreen
