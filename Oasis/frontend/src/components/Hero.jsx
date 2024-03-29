import { Container } from 'react-bootstrap'
import SeachBox from './micro_components/SeachBox'

const Hero = () => {

  return (
    <Container fluid className='position-relative d-flex flex-column justify-content-between align-items-center p-0 gap-5' style={{
      height: '100vh',
      width: '100vw',
    }}>
      <Container fluid className='hero-img p-0'>
        <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="House" />
      </Container>
      <Container className='position-absolute text-hero'>
        <h1>Bienvenido a <span>OASIS</span></h1>
        <p>Explora un mundo de posibilidades inmobiliarias, tu destino para encontrar el hogar de 
          tus sueños. Desde apartamentos urbanos modernos hasta acogedoras casas en suburbios tranquilos, 
          <span> estamos aquí para hacer realidad tus sueños de bienestar y confort.</span></p>
        <SeachBox type='catalog' placeholder='Buscar propiedades'/>
      </Container>
      <Container fluid className='d-flex justify-content-around align-items-start fs-4 fw-semibold services' style={{height: '15%'}}>
        <p>Conecta con agentes inmobiliarios</p>
        <p>Gran variedad de propiedades</p>
        <p>Asesoramiento personalizado</p>
      </Container>
    </Container>
  )
}

export default Hero