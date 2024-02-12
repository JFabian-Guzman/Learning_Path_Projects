import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../assets/style/AgentScreen.css';
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import ContactAgent from '../ContactAgent';

const CardAgent = ({agent}) => {

  
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <Card className='agent-card d-flex flex-row w-75' onClick={()=> setOpenModal(!openModal)}>
        <Card.Img  variant="top" className='p-2 agent-img w-25' src={agent.image} />
        <Card.Body className='d-flex flex-column justify-content-between align-items-start'>
            <Card.Title >{agent.name}</Card.Title>
          <Card.Text className='text-break'>
            {/* TODO: Add a limit to the description */}
            {agent.description}
          </Card.Text>
          <Card.Text className='d-flex align-items-center justify-content-between w-75 flex-wrap'>
            <span>
              <span className='fw-semibold'>Número:</span>  {agent.phone}
            </span>
            <span>
              <span className='fw-semibold'>Email:</span>  {agent.email}
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
          </Card.Text>
          <Button variant="dark" className='contact-btn'>Contactar</Button>
        </Card.Body>
      </Card>
      <ContactAgent open={openModal} onClose={()=>setOpenModal(false)} 
      email={agent.email}/>
    </>
  )
}

export default CardAgent
