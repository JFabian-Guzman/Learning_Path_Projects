import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import '../assets/style/HouseScreen.css'
import kitchen from '../assets/images/kitchens/kitchen_1.jpg'
import kitchen_2 from '../assets/images/kitchens/kitchen_2.jpg'
import kitchen_3 from '../assets/images/kitchens/kitchen_3.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HouseScreen = () => {

  const { id: productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/houses/${productId}`);
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);
  

  const handleClick = (e) => {
    const image = e.target
    const projector = document.querySelector('.image-projector img')
    projector.src = image.src
  }


  return (
    <Container fluid className='images-container d-flex my-5'>
      {/* This will be a container to proyect an image */}
      <Col md={9} className='image-projector d-flex justify-content-center align-items-center'>
        <Image src={kitchen_3} alt='kitchen' className='object-fit-cover w-75 h-100' fluid />
      </Col>
      {/* This will be a list of all the images, when you select one, it will show in the 'big screen' */}
      <Col md={3} className='image-index d-flex flex-column justify-content-start align-items-center'>
        {/* This will loop through the images */}
        <Row className='my-2 w-100'>
          <Col>
            <Image src={kitchen} alt='kitchen' fluid  className='house-image'
            onClick={handleClick}/>
          </Col>
        </Row>
        <Row className='my-2 w-100'>
        <Col>
            <Image src={kitchen_2} alt='kitchen' fluid  className='house-image'
            onClick={handleClick}/>
          </Col>
        </Row>
        <Row className='my-2 w-100'>
        <Col>
            <Image src={kitchen_3} alt='kitchen' fluid  className='house-image'
            onClick={handleClick}/>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}

export default HouseScreen
