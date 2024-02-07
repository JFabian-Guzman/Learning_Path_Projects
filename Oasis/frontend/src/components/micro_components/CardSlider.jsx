import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const CardSlider = ( data ) => {
  return (
    <div className="card-sld">
      <img src={data.img} alt="city" />
      <div className='txt-sld'>
        <p className='m-auto'>
          <FontAwesomeIcon className='mx-3' icon={faLocationDot} />
          {data.location}
        </p>
      </div>
    </div>
  )}

export default CardSlider