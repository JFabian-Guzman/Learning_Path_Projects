// Style
import '../assets/style/HomeScreen.css'
// Components
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import ProductsList from '../components/ProductsList'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {

  return (
    <>
      <Hero />
      < Container fluid
       style={{background:'var(--clr-honeydew)'}}>
        <p className='fs-2 fw-semibold ms-4 pt-4'
        style={{color: 'var(--clr-forestgreen)'}}>Comunidades</p>
        <Slider/>
      </Container>
      {/*New Section*/}
      < Container fluid>
        <p className='fs-2 fw-semibold ms-4 py-4'
        style={{color: 'var(--clr-forestgreen)'}}>Recien Listados</p>
        {/* TODO: Fetch data from DB */}
        <ProductsList />
      </Container>
      {/*New Section*/}
      < Container fluid
       style={{background:'var(--clr-honeydew)'}}>
        <p className='fs-2 fw-semibold ms-4 pt-4'
        style={{color: 'var(--clr-forestgreen)'}}>Servicios</p>
        <Services />
      </Container>
      <Footer />
    </>
  )
}

export default HomeScreen