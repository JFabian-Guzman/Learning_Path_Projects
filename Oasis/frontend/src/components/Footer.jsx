import { Container, Row, Col } from "react-bootstrap"; /* Imports components from the react-bootstrap library */
import { Link } from "react-router-dom"; /* Imports Link component from react-router-dom */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; /* Imports FontAwesomeIcon component */
import {
  faInstagram, faSquareFacebook, faWhatsapp, faTiktok 
} from '@fortawesome/free-brands-svg-icons'; /* Imports FontAwesome icons */

const Footer = () => {
  const currentYear = new Date().getFullYear(); /* Gets the current year */

  return (
    <footer className="bg-light p-2 footer"> {/* Footer container with light background and padding */}
      <Container>
        <Row>
          <Col className='text-center'>
            <p>Atencion al cliente</p>
            <Row>
              <Col>
                <Link to='/'><FontAwesomeIcon className="p-2 fs-3" icon={faWhatsapp} /></Link> {/* Whatsapp icon with link */}
              </Col>
            </Row>
          </Col>
          <Col className='text-center'>
            <p>Oasis &copy; {currentYear}</p> {/* Displays the copyright year */}
          </Col>
          <Col className='text-center'>
            <p>Siguenos en</p>
            <Row>
              <Col>
                <Link to='/'>
                  <FontAwesomeIcon className="p-2 fs-3" icon={faInstagram} />
                </Link>
                <Link to='/'>
                  <FontAwesomeIcon className="p-2 fs-3" icon={faSquareFacebook} />
                </Link>
                <Link to='/'>
                  <FontAwesomeIcon className="p-2 fs-3" icon={faTiktok} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer; /* Exports the Footer component for use in other parts of the application */