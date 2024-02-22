// Style
import '../assets/style/HomeScreen.css'
// Components
import Slider from '../components/Slider'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {

  return (
    <>
      <Hero />
      {/*New Section*/}
      <h2 className='ms-4'>Ultimas Publicaciones</h2>
      < Container fluid
      style={{ background: '#fff',
      boxShadow:'rgba(0, 0, 0, 0.1) 0px 0px 5px 1px'}}>
        <Slider/>
      </Container>
      {/*New Section*/}
      < Container fluid
        style={{ background: '#f5f5f5'}}
        className='d-flex align-items-center justify-content-center p-5'
        >
        <Services />
      </Container>
    </>
  )
}

export default HomeScreen