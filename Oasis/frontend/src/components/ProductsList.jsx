import { Container, Row, Col } from 'react-bootstrap'
import CardSpecs from './micro_components/CardSpecs'

//TODO: It should receive how many rows and columns it should have
//TODO: It should receive the data from the database
const ProductsList = ( data ) => {
  return (
    <Container fluid
      className='d-flex flex-column align-items-between
      justify-content-center px-5 last-listed-container'
      style={{ minHeight: '70vh' }}>

        <Row xs={1} md={2} lg={3} className="g-5 mb-5">
          <Col className='d-flex justify-content-center align-items-center'>
            <CardSpecs />
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <CardSpecs />
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <CardSpecs />
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <CardSpecs />
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <CardSpecs />
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <CardSpecs />
          </Col>
        </Row>
      </Container>
  )
}

export default ProductsList