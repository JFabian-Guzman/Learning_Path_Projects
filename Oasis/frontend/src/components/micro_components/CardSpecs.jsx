import Card from 'react-bootstrap/Card';
import house_sale from '../../assets/images/house_sale_img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'



const CardSpecs = ( {home} ) => {
  return (
    <Card style={{ maxWidth: '90%'}}>
      <div className='price mt-2 ms-2 p-2'>
        {home.price}
      </div>
      <Card.Img variant="top" src={house_sale} />
      <Card.Body>
        <Card.Title>{home.city}</Card.Title>
        <Card.Text>
          <FontAwesomeIcon className='ms-1 me-2'icon={faShower} /> {home.bathrooms} 
          <FontAwesomeIcon className='ms-4 me-2' icon={faBed} /> {home.bedrooms}
          <FontAwesomeIcon className='ms-4 me-2' icon={faHouse} /> {home.area} m²
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardSpecs