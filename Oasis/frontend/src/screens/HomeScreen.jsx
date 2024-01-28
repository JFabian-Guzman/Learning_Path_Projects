// Style
import '../assets/style/HomeScreen.css'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
// Components
import Header from '../components/Header'
import Slider from '../components/Slider'
import ServiceCard from '../components/ServiceCard'
import CardSpecs from '../components/CardSpecs'
// Images
import house1 from '../assets/images/house_illustration.svg'
import house2 from '../assets/images/house_illustration2.svg';
import castle from '../assets/images/castle.jpg'
// Bootstrap
import { Row, Container } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      
      <Container fluid style={{
        width: '100vw',
        height: '100vh',
      }}>
        <Header />
        <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="House" className='bg-img'/>
        <Container fluid  className=' mx-5 hero-txt'>
          <h2>PROVINCIA, CANTON</h2>
          <button>Explorar
          <FontAwesomeIcon icon={faUpRightFromSquare} />
          </button>
        </Container>
      </Container>
      <Container className='d-flex flex-column justify-content-start align-items-center' fluid style={{
          width: '100vw',
          height: '65vh',
          backgroundColor: 'var(--clr-honeydew)',
        }}>
        <Container fluid className='ms-4 mt-4'style={{
          width: '100%',
          height: '20%',
          color:  'var(--clr-forestgreen)',
        }}>
          <p className='fs-2 fw-semibold'>Comunidades</p>
        </Container>
        <Slider />
      </Container>
      <Container className='' style={{
        width: '100vw',
        height: '70vh',
      }}>
          <CardSpecs />
      </Container>
      <Container style={{
        width: '100vw',
        height: '70vh',
        display: 'grid',
        placeItems: 'center',
      }}>
        <Row xs={1} md={2} lg={3} className="g-5">
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
    </>
  )
}

export default HomeScreen