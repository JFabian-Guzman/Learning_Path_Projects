import { Container, Row, Col } from 'react-bootstrap'
import '../assets/style/HouseScreen.css'

const HouseScreen = () => {
  return (
    <Container fluid className='images-container my-5'>
      {/* This will be a container to proyect an image */}
      <Col className='image-projector'>
        SCREEN
      </Col>
      {/* This will be a list of all the images, when you select one, it will show in the 'big screen' */}
      <Col className='image-index w-75'>
        {/* This will loop through the images */}
        <Row>
          INDEX
        </Row>
      </Col>
    </Container>
  )
}

export default HouseScreen
