import { Button, Container } from 'react-bootstrap'
import '../assets/style/SellScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SellStepsScreen = () => {

  const navigate = useNavigate();
  const contactAgent = () => {
    navigate('/agents')
  }
  const listHouse = () => {
    navigate('/sell')
  }

  return (
    <>
      <Container fluid className='position-relative d-flex flex-column justify-content-between align-items-start p-0 gap-5'>
        <Container fluid className='sell-container p-0'>
          <h2 className="text-center w-100 position-absolute">Maximiza el valor de tu propiedad: Coloca en el mercado tu casa con éxito</h2>
          <img src="https://images.unsplash.com/photo-1489370321024-e0410ad08da4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="House" className='sell-img'/>
        </Container>
        <h2 className='ms-4'   style={{color:'var(--clr-forestgreen)'}}>
          Vende con nuestros agentes</h2>
        <Container fluid
        className='d-flex'>
          <img src="https://images.unsplash.com/photo-1616587896595-51352538155b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House" className='second-sell-image w-50'/>
          <Container className='d-flex flex-column justify-content-around w-50'>
            <h2 className='text-center'>¿Por qué vender con nosotros?</h2>
            <p className='ms-5'>
            Explorar la venta con nosotros no exige compromisos inmediatos. Ofrecemos orientación y asesoramiento personalizado, 
            incluso si aún no ha decidido vender. Nuestro equipo comprometido está listo para responder a sus preguntas y 
            proporcionar información detallada.
            </p>
            <p className='ms-5 fw-regular fs-5'
            style={{color: 'var(--clr-darkolivegreen)'}}>
              <FontAwesomeIcon className='me-3' icon={faCheck} />Experiencia excepcional <br/>
              <FontAwesomeIcon className='me-3' icon={faCheck} />Resultados comprobados <br/>
              <FontAwesomeIcon className='me-3' icon={faCheck} /> Equipo comprometido
            </p>
            <Button variant='outline-dark' 
            className='ms-5 w-50'
            onClick={contactAgent}>Contactar agente</Button>
          </Container>
        </Container>
        <h2 className='ms-4'
        style={{color:'var(--clr-forestgreen)'}}>Vende por tu cuenta</h2>
        <Container fluid
        className='d-flex pb-5'>
          
          <Container className='d-flex flex-column justify-content-around w-50'>
            <h2 className='text-center'>¿Por qué vender por su cuenta?</h2>
            <p className='ms-5'>
            Si bien vender por su cuenta brinda cierto control, también conlleva desafíos como la visibilidad limitada y 
            la complejidad legal. Con nosotros, obtiene el respaldo de un equipo experimentado, una red extensa y estrategias de 
            marketing eficaces.
            </p>
            <p className='ms-5 fw-regular fs-5'
            style={{color: 'var(--clr-darkolivegreen)'}}>
              <FontAwesomeIcon className='me-3' icon={faCheck} />Control directo <br/>
              <FontAwesomeIcon className='me-3' icon={faCheck} />Ahorro de costos <br/>
              <FontAwesomeIcon className='me-3' icon={faCheck} />Mayor involucramiento
            </p>
            <Button variant='outline-dark' 
            className='ms-5 w-50'
            onClick={listHouse}>Listar una casa</Button>
          </Container>
          <img src="https://images.unsplash.com/photo-1598870784088-35e7058da12c?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House" className='second-sell-image w-50'/>
        </Container>

      </Container>
    </>
  )
}

export default SellStepsScreen
