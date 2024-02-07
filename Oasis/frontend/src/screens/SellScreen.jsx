import FormSell from "../components/micro_components/FormSell"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

const SellScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{color:'var(--clr-forestgreen)'}} className="m-3">Listar Propiedad</h1>
      <FormSell />
    </>
  )
}

export default SellScreen
