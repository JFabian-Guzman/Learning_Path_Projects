import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../assets/style/AgentScreen.css';
import { Container } from 'react-bootstrap';

const CardAgent = ({agent}) => {
  return (
    <Card className='agent-card' style={{ width: '18rem' }}>
      <Card.Img  variant="top" className='p-2 agent-img' src={agent.image} />
      <Card.Body>
        <Card.Text className='mt-3 ms-2'>
          {agent.description}
        </Card.Text>
        <Container className='d-flex justify-content-between align-items-center'>
          <Card.Title >{agent.name}</Card.Title>
          <Button variant="dark" className='contact-btn'>Contactar</Button>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default CardAgent
