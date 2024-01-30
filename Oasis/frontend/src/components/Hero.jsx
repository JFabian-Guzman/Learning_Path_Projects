import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'


const Hero = () => {

  const handleClick = () => {
    const services = document.getElementById('services')
    services.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container fluid style={{
      minHeight: '100vh',
      minWidth: '100vw',
    }}>
      <Header />
      <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="House" className='bg-img'/>
      <Container fluid  className=' mx-5 hero-txt'>
        <h2>PROVINCIA, CANTON</h2>
        <button onClick={handleClick}>Servicios
        <FontAwesomeIcon icon={faUpRightFromSquare} />
        </button>
      </Container>
    </Container>
  )
}

export default Hero