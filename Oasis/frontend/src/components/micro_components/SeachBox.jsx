import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"

const SeachBox = ({type, placeholder}) => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    // If there is a keyword, go to the search page, else go to the catalog page
    // .trim() removes whitespace from both ends of a string
    if (keyword.trim()) {
      setKeyword('');
      navigate(`/${type}/search/${keyword}`);
    } else {
      navigate(`/${type}`);
    }
  }


  return (
    <Form 
      onSubmit={submitHandler}
      className='d-flex justify-content-center align-items-center'
    >
      <Form.Control
        type='text'
        name='location'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder={placeholder}
        style={{boxShadow: 'none', border: '1px solid #ccc'}}
        ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Buscar
      </Button>
    </Form>
  )
}

export default SeachBox