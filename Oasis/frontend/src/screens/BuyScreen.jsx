import FiltersNav from "../components/FiltersNav"
import '../assets/style/BuyScreen.css'
import { Container, Row, Col } from 'react-bootstrap'
import CardSpecs from '../components/micro_components/CardSpecs'
import { useGetHousesQuery } from "../slices/housesApiSlice"

const BuyScreen = () => {


  const { data: houses, error, isLoading } = useGetHousesQuery();

  return (
    <>
      {isLoading ? (
        <h2>is loading...</h2>
      ) : error ? (
        <p>{error?.data?.message || error.error}</p>
      ) : (
      <>
        <FiltersNav />
            <p className='fs-5 ms-4 mt-4'>Resultados encontrados: {houses.length}</p>
            <Container fluid
            className='d-flex flex-column align-items-between
            justify-content-center px-5 last-listed-container'>

              <Row xs={1} md={2} lg={3} className="g-5 mb-5 d-flex justify-content-center align-items-center">
                {houses.map((house) => (
                  <Col key={house._id} className='d-flex justify-content-center align-items-center'>
                    <CardSpecs home={house} />
                  </Col>
                ))}
              </Row>
            </Container>
          </>
      )}
    </>
  )
}

export default BuyScreen