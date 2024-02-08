import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'


const CardSpecs = ( {home} ) => {
  return (
    <>
      <LinkContainer className='specs-container' to={`/catalog/${home._id}`}>
        <Card>
            <div className='price mt-2 ms-2 p-2'>
              {home.price}
            </div>
            <Card.Img variant="top" src={home.image[0]} />
            <Card.Body>
              <Card.Title>{home.city}</Card.Title>
              <Card.Text>
                <FontAwesomeIcon className='ms-1 me-2'icon={faShower} /> {home.bathrooms} 
                <FontAwesomeIcon className='ms-4 me-2' icon={faBed} /> {home.bedrooms}
                <FontAwesomeIcon className='ms-4 me-2' icon={faHouse} /> {home.area} m²
              </Card.Text>
            </Card.Body>
        </Card>
      </LinkContainer>
    </>
    
  )
}

export default CardSpecs