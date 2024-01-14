import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';
import Paginate from '../components/Paginate.jsx';

const HomeScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error} = useGetProductsQuery({ pageNumber });

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) : (<>
      <h1>Latest Products</h1>
      <Row>
        { data.products.map( (product) => (
          <Col key = {product._id}/*This solves a warning*/ sm ={12} md ={6} lg ={4} xl ={3}>
            {/* Determine how many colunmns a product
            will take based on the screen size */}
            <Product product={product}/>
          </Col>
        ))}
      </Row>
      <Paginate 
      pages={data.pages}
      page={data.page} />
      </>) }
    </>
  )
}

export default HomeScreen