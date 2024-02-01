import { Container, Row } from 'react-bootstrap'
import ServiceCard from './micro_components/CardService'
// Images
import house1 from '../assets/images/house_illustration.svg'
import house2 from '../assets/images/house_illustration2.svg';
import castle from '../assets/images/castle.jpg'

const Services = () => {
  return (
    <Container fluid
      className='d-flex align-items-center justify-content-center p-5'
      style={{ minHeight: '55vh' }}
      id='services'>
        <Row xs={1} md={2} lg={3} className="g-4">
          <ServiceCard
            img ={ castle }
            txt_btn ='Buscar propiedades'
            title ='Casas en venta'/>
          <ServiceCard 
            img ={ house1 }
            txt_btn ='Buscar alquileres'
            title ='Casas para alquilar'/>
          <ServiceCard
            img ={ house2 }
            txt_btn ='Listar una propiedad'
            title ='Vender o Alquilar'/>
        </Row>
      </Container>
  )
}

export default Services