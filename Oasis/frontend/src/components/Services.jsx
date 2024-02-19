import { Row } from 'react-bootstrap'
import ServiceCard from './micro_components/CardService'
// Images
import service_1 from '../assets/images/services_img/service_1.svg'
import service_2 from '../assets/images/services_img/service_2.svg';
import service_3 from '../assets/images/services_img/service_3.svg'

const Services = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
    <ServiceCard
      img={service_3}
      txt_btn='Explorar'
      title='Comprar'
      description='Encuentra tu hogar de ensueño para comprar. Explora nuestras opciones y encuentra la propiedad perfecta para ti.'
    />
    <ServiceCard
      img={service_2}
      txt_btn='Ver Disponibilidad'
      title='Alquilar'
      description='Descubre nuestras increíbles opciones de alquiler. Encuentra la casa ideal que se adapte a tus necesidades y estilo de vida.'
    />
    <ServiceCard
      img={service_1}
      txt_btn='Publicar Anuncio'
      title='Vender'
      description='Pon a la venta tu propiedad con nosotros. Te ofrecemos asesoramiento profesional y amplia visibilidad para la mejor oferta.'
    />
    </Row>
  )
}

export default Services