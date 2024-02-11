import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faShower } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'
import Lottie from "lottie-react";
import heart from "../../assets/lottie/heart.json";
import { useEffect, forwardRef, useRef } from 'react';
import { useState } from 'react';

const CardSpecs = forwardRef(({ home }, ref) => {

  const animation = useRef();
  const [like , setLike] = useState(false);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if( firstRun ) {
      if( like ) {
        animation.current.goToAndStop(66, true);
      } else {
        animation.current.goToAndStop(19, true);
      }
      setFirstRun(false);
    } else {
      if(like) {
        animation.current.playSegments([19, 66], true);
      } else {
        animation.current.playSegments([0, 19], true);
      }
    }
    
  }, [like]);


  return (
    <>
        <Card className='specs-container'>
            <div className='price mt-2 ms-2 p-2'>
              {home.price}
            </div>
            <div className='heart-animation'>
              <Lottie 
                animationData={heart}
                style={{width: 50, height: 50}}
                lottieRef={animation}
                autoplay={false} 
                loop={false}
                onClick={() => setLike(!like)}
              />
            </div>
            <Link   to={`/catalog/${home._id}`}>
              <Card.Img style={{maxHeight:'30vh'}} variant="top" src={home.image[0]} />
            </Link>
            <Card.Body>
              <Card.Title>
                {home.city}
                <span style={{color: '#aaa'}}>{home.inSale ? ' - En Venta' : ' - En Renta'}</span>
              </Card.Title>
              <Card.Text>
                <FontAwesomeIcon className='ms-1 me-2'icon={faShower} /> {home.bathrooms} 
                <FontAwesomeIcon className='ms-4 me-2' icon={faBed} /> {home.bedrooms}
                <FontAwesomeIcon className='ms-4 me-2' icon={faHouse} /> {home.area} m²
              </Card.Text>
            </Card.Body>
        </Card>
    </>
    
  )
});

export default CardSpecs