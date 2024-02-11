import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Lottie from "lottie-react";
import heart from "../../assets/lottie/heart.json";
import { useEffect, forwardRef, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../slices/favoriteSlice';

const CardSpecs = forwardRef(({ home }, ref) => {

  // Animation
  const animation = useRef();
  const [like , setLike] = useState(false);
  const [firstRun, setFirstRun] = useState(true);

  const dispatch = useDispatch();

  // Select favorites
  const myFavorites = useSelector((state) => state.myFavorites);
  const {favorites} = myFavorites;


  useEffect(() => {
    if( firstRun ) {
      favorites.find((favorite) => {
        if( favorite._id === home._id) {
          animation.current.goToAndStop(66, true);
        } else {
          animation.current.goToAndStop(19, true);
        }
      });
      setFirstRun(false);
    } else {
      if(like) {
        animation.current.playSegments([19, 66], true);
        dispatch(addFavorite({...home}));
      } else {
        animation.current.playSegments([0, 19], true);
        dispatch(removeFavorite(home._id));
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
              <Card.Img style={{height:'30vh'}} variant="top" src={home.image[0]} />
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