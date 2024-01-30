import Card from 'react-bootstrap/Card';
import house_sale from '../../assets/images/house_sale_img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



const CardSpecs = () => {
  return (
    <Card>
      <div className='price mt-2 ms-2 p-2'>
        ₡50,000,000
      </div>
      <Card.Img variant="top" src={house_sale} />
      <Card.Body>
        <Card.Title>Ciudad, Provincia</Card.Title>
        <Card.Text>
          <FontAwesomeIcon className='ms-1 me-2'icon={faShower} /> 2 
          <FontAwesomeIcon className='ms-4 me-2' icon={faBed} /> 4
          <FontAwesomeIcon className='ms-4 me-2' icon={faHouse} /> 192m²
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardSpecs