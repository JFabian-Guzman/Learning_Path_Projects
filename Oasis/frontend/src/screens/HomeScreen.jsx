// Style
import '../assets/style/HomeScreen.css'
// Components
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import ProductsList from '../components/ProductsList'
import Services from '../components/Services'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {

  return (
    <>
      <Hero />
      {/*New Section*/}
      < Container fluid
      style={{ background: '#ffff', padding: '20px' }}
      >
        <ProductsList />
      </Container>
      {/*New Section*/}
      < Container fluid
        style={{ background: '#f5f5f5', padding: '20px' }}
        >
        <Services />
      </Container>
      {/*New Section*/}
      < Container fluid className='p-5'
      style={{ background: '#ffff', padding: '20px' }}>
        <Slider/>
      </Container>
    </>
  )
}

export default HomeScreen