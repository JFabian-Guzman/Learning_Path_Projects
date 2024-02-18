import FormSell from "../components/micro_components/FormSell"
import Conatiner from 'react-bootstrap/Container'

const SellScreen = () => {

  return (
    <>
    <div
    style={{ position: 'relative',
    overflow: 'hidden',
    display:'grid',
    placeItems:'center'
    }}>
      <img
        className="sell-background-img"
        src="https://images.unsplash.com/photo-1620509400919-a2ef8294f239?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Oasis" />
        <FormSell />
    </div>
    </>
  )
}

export default SellScreen
