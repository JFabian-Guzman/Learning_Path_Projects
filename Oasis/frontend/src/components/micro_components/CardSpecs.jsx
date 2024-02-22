import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faShower } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Lottie from "lottie-react";
import heart from "../../assets/lottie/heart.json";
import { useEffect, forwardRef, useRef} from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../slices/favoriteSlice';
import { toast } from 'react-toastify';

const CardSpecs = forwardRef(({ home }, ref) => {

  // Select favorites
  const myFavorites = useSelector((state) => state.myFavorites);
  let {favorites} = myFavorites;
  // Animation
  const animation = useRef();
  const [like , setLike] = useState(favorites.find((favorite) => favorite._id === home._id));
  const [firstRender, setFirstRender] = useState(true);
  // Check if the user is logged in
  const { userInfo } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    // Check if the user is logged in
    if( !userInfo ) {
      toast.info('Debes iniciar sesión');
    } else {
      setLike(!like);
    }
  }

  useEffect(() => {
    if( firstRender ) {
      if( like ) {
        animation.current.goToAndStop(66, true);
      } else {
        animation.current.goToAndStop(19, true);
      }
      setFirstRender(false);
    } else {
      if(like) {
        animation.current.playSegments([19, 66], true);
        dispatch(addFavorite({...home}));
      } else {
        animation.current.playSegments([0, 19], true);
        dispatch(removeFavorite(home._id));
      }
    }
    // The next line supress warning
    // eslint-disable-next-line
  }, [like, dispatch, home]);

  return (
    <>
        <Card className='specs-container h-100 w-100' >
            <div className='price mt-2 ms-2 p-2'>
              ${home.price}
            </div>
            <div className='heart-animation'>
              <Lottie
                animationData={heart}
                style={{width: 50, height: 50}}
                lottieRef={animation}
                autoplay={false} 
                loop={false}
                onClick={handleClick}
              />
            </div>
            <Link   to={`/catalog/${home._id}`}>
              <Card.Img variant="top" src={home.image[0]}
              style={{height: '300px', objectFit: 'cover'}}
              />
            </Link>
            <Card.Body>
              <Card.Title>
                {home.city}
                <span style={{color: '#aaa'}}>{home.inSale ? ' - En Venta' : ' - En Renta'}</span>
              </Card.Title>
              <Card.Text>
                <FontAwesomeIcon className='ms-1 me-2'icon={faShower} /> {home.bathrooms} 
                <FontAwesomeIcon className='ms-4 me-2' icon={faBed} /> {home.bedrooms}
                <FontAwesomeIcon className='ms-4 me-2' icon={faHouse} /> {home.houseArea} m²
                <FontAwesomeIcon className='ms-4 me-2' icon={faExpand} /> {home.totalArea} m²
              </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
});

export default CardSpecs