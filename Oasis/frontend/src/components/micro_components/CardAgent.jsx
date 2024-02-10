import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardAgent = ({agent}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" className='p-2' src={agent.image} />
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Title>{agent.name}</Card.Title>
        <Button variant="dark">Contact</Button>
      </Card.Body>
    </Card>
  )
}

export default CardAgent
