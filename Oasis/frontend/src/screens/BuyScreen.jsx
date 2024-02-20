import FiltersNav from "../components/FiltersNav"
import '../assets/style/BuyScreen.css'
import { Container, Row, Col } from 'react-bootstrap'
import CardSpecs from '../components/micro_components/CardSpecs'
import { useGetHousesQuery } from "../slices/housesApiSlice"
import Load from "../components/micro_components/Load"
import { useRef } from "react"
import { useParams } from "react-router-dom"
import Paginate from "../components/Paginate"

const BuyScreen = () => {

  const { pageNumber } = useParams();
  const { data, error, isLoading } = useGetHousesQuery({pageNumber});
  const animation = useRef(null);

  return (
    <>
      {isLoading ? (
        <Load />
      ) : error ? (
        <p>{error?.data?.message || error.error}</p>
      ) : (
      <>
        <FiltersNav />
        <p className='fs-5 ms-4 mt-4'>Resultados encontrados: {data.houses.length}</p>
        <Container fluid
        className='d-flex flex-column align-items-between
        justify-content-center px-5 last-listed-container'>

          <Row xs={1} md={2} lg={2} xl={3} className="g-5 mb-5 d-flex justify-content-center align-items-center">
            {data.houses.map((house) => (
              <Col key={house._id} className='d-flex justify-content-center align-items-center'>
                <CardSpecs home={house} ref={animation}/>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <Paginate pages={data.pages} page={data.page} />
            </Col>
          </Row>
        </Container>
      </>
      )}
    </>
  )
}

export default BuyScreen