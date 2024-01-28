import { Button, Col, Card } from "react-bootstrap"

const ServiceCard = (data) => {
  return (
    <Col>
      <Card className='text-center'>
        <Card.Img variant="top" src={data.img} 
        style={{
          maxWidth: '60%', margin: 'auto'}}/>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </Card.Text>
          <Button variant="primary">{data.txt_btn}</Button> 
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ServiceCard
