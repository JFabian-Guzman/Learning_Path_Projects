import CardAgent from "../components/micro_components/CardAgent"
import { Container, Row, Col } from 'react-bootstrap'
import { useGetAgetnsQuery } from "../slices/agentApiSlice"

const AgentScreen = () => {

  const { data: agents, error, isLoading } = useGetAgetnsQuery();


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
          {agents.map((agent) => (
            <Row key={agent._id} xs={1} md={2} lg={3} className="g-5 mb-5 d-flex justify-content-center align-items-center">
              <Col  className='d-flex justify-content-center align-items-center w-100'
              >
              <CardAgent agent={agent}/>
              </Col>
            </Row>
          ))}
          </Container>
        </>
      )}
    </>
  )
}

export default AgentScreen
