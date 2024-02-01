// Style
import '../assets/style/HomeScreen.css'
// Components
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import ProductsList from '../components/ProductsList'
import Services from '../components/Services'
import Footer from '../components/Footer'

const HomeScreen = () => {

  return (
    <>
      <Hero />
      <p className='fs-2 fw-semibold ms-4 mt-5'>Comunidades</p>
      <Slider />
      {/*New Section*/}
      <p className='fs-2 fw-semibold ms-4'>Recien Listados</p>
      {/* TODO: Fetch data from DB */}
      <ProductsList />
      {/*New Section*/}
      <p className='fs-2 fw-semibold ms-4 mt-5'>Servicios</p>
      <Services />
      <Footer />
    </>
  )
}

export default HomeScreen