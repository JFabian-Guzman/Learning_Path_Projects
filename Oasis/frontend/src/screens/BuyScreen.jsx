import FiltersNav from "../components/FiltersNav"
import '../assets/style/BuyScreen.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import CardSpecs from '../components/micro_components/CardSpecs'

const BuyScreen = () => {

  const  [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      const { data } = await axios.get('/api/houses');
      setHomes(data);
    }

    fetchHomes();
  }, []);


  return (
    <>    
      <FiltersNav />
      <p className='fs-5 ms-4 mt-4'>Resultados encontrados: ...</p>
      <Container fluid
      className='d-flex flex-column align-items-between
      justify-content-center px-5 last-listed-container'>

        <Row xs={1} md={2} lg={3} className="g-5 mb-5">
          {homes.map((home) => (
            <Col key={home._id} className='d-flex justify-content-center align-items-center'>
              <CardSpecs home={home} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default BuyScreen