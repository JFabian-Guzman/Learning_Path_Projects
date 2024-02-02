import FormSell from "../components/micro_components/FormSell"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

const SellScreen = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }

  return (
    <>
        <Container className="d-flex 
        justify-content-between
        align-items-center"
        fluid
        style={{color:'var(--clr-lightgreen)',
        background:'var(--clr-forestgreen)'}}>
          <h1>Listar Propiedad</h1>
          <Button variant="outline-light" className='ms-5'
          onClick={goBack}>Ir a Inicio</Button>
        </Container>
      <FormSell />
      <Footer />
    </>
  )
}

export default SellScreen
