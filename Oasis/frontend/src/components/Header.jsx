import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import '../assets/style/HomeScreen.css'

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid mx-5">
            <Link className="navbar-brand " to="/">Oasis</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link"to="/buy">Comprar</Link>
                {/* Set rent checkbox active*/}
                <Link className="nav-link" to="/buy">Rentar</Link>
                <Link className="nav-link" to="/sell">Vender</Link>
                <Link className="nav-link" to="/login"><FontAwesomeIcon icon={faUser} /></Link>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Header