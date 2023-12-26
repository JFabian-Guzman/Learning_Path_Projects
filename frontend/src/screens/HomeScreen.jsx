import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        { products.map( (product) => (
          <Col sm ={12} md ={6} lg ={4} xl ={3}>
            {/* Determine how many colunmns a product
            will take based on the screen size */}
            <Product product={product}/>

          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen