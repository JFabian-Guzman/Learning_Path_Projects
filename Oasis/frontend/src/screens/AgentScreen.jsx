import CardAgent from "../components/micro_components/CardAgent"
import { Container, Row, Col } from 'react-bootstrap'
import { useGetAgentsQuery } from "../slices/agentApiSlice"
import { useParams } from "react-router-dom"
import Paginate from "../components/Paginate"
import SeachBox from "../components/micro_components/SeachBox"

const AgentScreen = () => {

  const { pageNumber, keyword } = useParams();
  const { data , error, isLoading } = useGetAgentsQuery({ keyword, pageNumber});

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error?.data?.message || error.error}</p>
      ) : (
        <>
        <Container fluid
          className='d-flex flex-column align-items-between
          justify-content-center mt-5 last-listed-container'>
          <Row className="mb-5">
            <Col className='d-flex justify-content-center align-items-center'>
              <SeachBox type='agents' placeholder='Nombre del agente'/>
            </Col>
          </Row>
          {data.agents.map((agent) => (
            <Row key={agent._id} xs={1} md={2} lg={3} className="g-5 mb-5 d-flex justify-content-center align-items-center">
              <Col  className='d-flex justify-content-center align-items-center w-100'
              >
              <CardAgent agent={agent}/>
              </Col>
            </Row>
          ))}
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <Paginate pages={data.pages} page={data.page} 
              keyword={keyword ? keyword : ''} type='agents'/>
            </Col>
          </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default AgentScreen
