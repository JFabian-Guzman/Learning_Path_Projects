import { Button, Col, Card } from "react-bootstrap"

const ServiceCard = (data) => {
  return (
    <Col className="d-flex justify-content-center align-items-center">
      <Card className="text-center service-card" style={{width:'80%', minHeight: '65vh', display: 'grid', alignItems:'center'}}>
        <Card.Img className="w-75 m-auto" variant="top" src={data.img} />
        <Card.Body className="d-flex flex-column jusitify-content-center align-items-center">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text className="w-75">
            {data.description}
          </Card.Text>
          <Button className="service-button">
              {data.txt_btn}
          </Button> 
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ServiceCard
