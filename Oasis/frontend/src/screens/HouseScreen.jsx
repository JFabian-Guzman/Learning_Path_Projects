import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HouseScreen = () => {

  const { id: homeId } = useParams();

  // images: [] let me know that it is an array and I can loop through it
  const [home, setHome] = useState({ image: [] });

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/houses/${homeId}`);
      setHome(data);
    }
    fetchProduct();
  }, [homeId]);

  const handleClick = e => {
    const projector = document.querySelector('.image-projector img');
    projector.src = e.target.src;
  }

  return (
    <>
    <Container fluid className='w-100 my-4 ms-5 d-flex flex-column justify-content-center align-items-start'>
      <h1>{home.price}</h1>
      <h4 style={{color: '#aaa'}}>{home.city}, {home.county}</h4>
    </Container>
      {/* TODO: To make it responsive, make 2 rows and 1 col instead of 2 cols */}
      <Container fluid className='w-100 d-flex'
      style={{height: '70vh'}}>
        {/* This will be a container to project an image */}
        <Col md={9} className='image-projector d-flex justify-content-center align-items-center'>
          <Image src={home.image[0]} alt='kitchen'
            className='object-fit-cover w-75 h-100' fluid />
        </Col>
        {/* List all the images */}
        <Col md={2} className='image-index d-flex flex-column 
          justify-content-start align-items-center overflow-auto'>
          {/* This loop through the images */}
          {
            home.image.map((i, index) => (
              <Row key={index} className='my-2 w-100'>
                <Col>
                  <Image src={i} alt='kitchen' fluid  style={{cursor: 'pointer'}}
                  onClick={handleClick}/>
                </Col>
              </Row>
            ))
          }
        </Col>
        {/* This helps to create a space to a better positioning */}
        <Col md={1}></Col>
      </Container>
      <Container className='w-100 d-flex my-5 gap-3' style={{height: '15vh'}}>
        <Container fluid className='w-75 rounded '
        style={{border: '1px solid black'}}>
          <p className='h-100 d-flex justify-content-around align-items-center
            fs-5'>
            <span>
              <span>Baños:</span> {home.bathrooms}
            </span>
            |
            <span>
              Cuartos: {home.bedrooms}
            </span>
            |
            <span>
              Interior: {home.area} m²
            </span>
            |
            <span>
              Propiedad: {home.area} m²
            </span>
            |
            <span>
              Hogar: {home.area} m²
            </span>
          </p>
        </Container>
        <Container className='w-25 d-flex justify-content-center
        align-items-center flex-column gap-4 rounded'>
          <Button variant='outline-dark' className='w-100 h-50 shadow-sm'>Solicitar tour</Button>
          <Button variant='outline-dark' className='w-100 shadow-sm'>Contactar agente</Button>
        </Container>
      </Container>
      <Container style={{height: '30vh'}}>
        <h2>Descripción: </h2>
        <p>{home.description}</p>
      </Container>
    </>
  )
}

export default HouseScreen
