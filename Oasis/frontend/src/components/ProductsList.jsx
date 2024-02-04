import { Container, Row, Col } from 'react-bootstrap'
import CardSpecs from './micro_components/CardSpecs'
import { useEffect, useState } from 'react'
import axios from 'axios'

//TODO: It should receive how many rows and columns it should have
//TODO: It should receive the data from the database
const ProductsList = ( ) => {

  const  [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      const { data } = await axios.get('/api/houses');
      setHomes(data);
    }

    fetchHomes();
  }, []);

  return (
    <Container fluid
      className='d-flex flex-column align-items-between
      justify-content-center px-5 last-listed-container'>

        <Row xs={1} md={2} lg={3} className="g-5 mb-5">
          {homes.slice(0, 6).map((home) => (
            <Col key={home._id} className='d-flex justify-content-center align-items-center'>
              <CardSpecs home={home} />
            </Col>
          ))}
        </Row>
      </Container>
  )
}

export default ProductsList