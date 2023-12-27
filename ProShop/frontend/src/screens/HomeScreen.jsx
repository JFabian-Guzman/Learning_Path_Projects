import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios'

const HomeScreen = () => {
  const [products/*Current state value*/
    , setProdutcs/*Function to update the state*/] = useState([]);/*Hook*/
  useEffect (() => {
    const fetchProducts = async () => {
      /*
        Wait on axios to get the products from /api/products
        Thanks to the proxy we dont have to add localhost:8000
      */
      const { data } = await axios.get('/api/products');
      setProdutcs(data); // Add a product to 'products'
    };
    fetchProducts();
  }, []/*Array of dependencies*/);

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