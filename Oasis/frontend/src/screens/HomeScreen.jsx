// Style
import '../assets/style/Hero.css'
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
// Components
import Header from '../components/Header'
import Slider from '../components/Slider'
import ServiceCard from '../components/ServiceCard'
// Images
import house1 from '../assets/images/house_illustration.svg'
import house2 from '../assets/images/house_illustration2.svg';
import castle from '../assets/images/castle.jpg'
// Bootstrap
import { Row, Container } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="House" className='bg-img'/>
      <Header />
      <div className='hero-txt'>
        <h2>PROVINCIA, CANTON</h2>
        <button>Explorar
        <FontAwesomeIcon icon={faUpRightFromSquare} />
        </button>
      </div>
      <div className="main-container">
        <div className='container-sld'>
          <div className='new-section'>
            <h2>Comunidades</h2>
            <div className="line"></div>
          </div>
          <Slider />
        </div>
        <div className="container-services">
          <Container>
            <Row xs={1} md={2} lg={3} className="g-5">
              <ServiceCard  
                length ={3} 
                img ={ castle }
                txt_btn ='Buscar propiedades'
                title ='Casas en venta'/>
              <ServiceCard  
                length ={3} 
                img ={ house1 }
                txt_btn ='Buscar alquileres'
                title ='Casas para alquilar'/>
              <ServiceCard  
                length ={3} 
                img ={ house2 }
                txt_btn ='Listar una propiedad'
                title ='Vender o Alquilar'/>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default HomeScreen