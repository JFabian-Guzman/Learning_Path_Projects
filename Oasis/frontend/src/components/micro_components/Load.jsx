import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

function Load() {
  return (
    <>
      <Container className="d-flex justify-content-center alig-items-center">
        <Spinner animation="border"/>;
      </Container>
    </>
  )
}

export default Load;