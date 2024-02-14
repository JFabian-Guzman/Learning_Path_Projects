import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { 
  useCreateHouseMutation,
  useUploadHouseImageMutation,
} from '../../slices/housesApiSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Load from './Load';

const FormSell = () => {

  const [createHouse, { error, isLoading }] = useCreateHouseMutation();
  const [uploadHouseImage, {isLoading: loadingUpload}] = useUploadHouseImageMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Data
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [houseArea, setHouseArea] = useState('');
  const [totalArea, setTotalArea] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [image, setImage] = useState('');
  const [inSale, setInSale] = useState(false);
  const [forRent, setForRent] = useState(false);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image',e.target.files[0]);
    try {
      const res = await uploadHouseImage(formData).unwrap();
      toast.success('Imagen subida exitosamente');
      // Send the image url to the state
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // Send data
  const handleNewHouse = async ( e ) => {
    e.preventDefault();
    const newHouse ={
      city,
      county,
      description,
      price,
      totalArea,
      houseArea,
      bathrooms,
      bedrooms,
      image,
      inSale,
      forRent
    }

    if (window.confirm('¿Está seguro de que desea listar esta propiedad?')) {
      try {
        await createHouse(newHouse);
        navigate(`/profile/${userInfo._id}`);
        toast.success('Propiedad listada exitosamente');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }
  // TODO: Every form input is required
  return (
    <>
    { isLoading ? (
        <Load />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
            <Form className='w-100 h-100 form
        d-flex flex-column justify-content-center
        align-items-center'>
          {/* Location */}
          <Form.Group className="mb-3 mt-5 w-50">
            <FloatingLabel controlId="city" label="Provincia" className="mb-3">
              <Form.Control
              type="text"
              placeholder="Provincia"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <FloatingLabel controlId="county" label="Cantón" className="mb-3">
              <Form.Control
              type="text"
              placeholder="Cantón"
              value={county}
              onChange={(e) => setCounty(e.target.value)}/>
            </FloatingLabel>
          </Form.Group>
          {/* Description */}
          <Form.Group className="mb-3 w-50">
            <FloatingLabel controlId="description" label="Descripción">
              <Form.Control
                as="textarea"
                value={description}
                placeholder="Descripción"
                style={{ height: '100px' }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          {/* Price */}
          <Form.Group className="mb-3 w-50">
            <FloatingLabel controlId="price" label="Valor" className="mb-3">
              <Form.Control
              value={price}
              type="text"
              placeholder="Valor"
              onChange={(e) => setPrice(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          {/* Area */}
          <Form.Group className="mb-3 w-50">
            <FloatingLabel controlId="houseArea" label="Área del lote" className="mb-3">
              <Form.Control
                value={houseArea}
                type="text"
                placeholder="Área del lote" 
                onChange={(e) => setHouseArea(e.target.value)}
                />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3 w-50">
          <FloatingLabel controlId="TotalArea" label="Área de la casa" className="mb-3">
              <Form.Control
                value={totalArea}
                type="text"
                placeholder="Área de la casa"
                onChange={(e) => setTotalArea(e.target.value)}
                />
            </FloatingLabel>
          </Form.Group>
          {/* Bedrooms  & Bathrooms*/}

          <Form.Group className="mb-3 w-50">
            <span>Baños y cuartos</span>
            <Container className='d-flex 
            align-items-center
            justify-content-center'
            >
              <Form.Control type="number"
              placeholder="cuartos" id='bedrooms' 
              className=' w-25'
              min='0' max='20'
              value={bedrooms}
              onChange={(e)=>setBedrooms(e.target.value)}/>
              <Form.Control type="number" id='batrooms' 
              placeholder="baños" className='ms-2 w-25'
              min='0' max='20'
              value={bathrooms}
              onChange={(e)=> setBathrooms(e.target.value)}/>
            </Container>
          </Form.Group>
          {/* Image */}
          <Form.Group className="mb-3 w-50">
            <span>Seleccionar imagenes</span>
            <Form.Control
              className='mt-3'
              type="text" 
              placeholder="URL de la imagen"
              value={image}
              onChange={(e)=> setImage(e.target.value)}
              multiple 
              />
            <Form.Control
              type='file'
              label='Seleccionar imagenes'
              onChange={uploadFileHandler}
            >

            </Form.Control>
          </Form.Group>
          {/* Rent or Sale or Rent & Sale */}
          <Form.Group className="mb-3 d-flex">
            <Form.Check 
            id='inSale' 
            type="checkbox" 
            label="Vender"
            value={inSale}
            onChange={(e)=> setInSale(e.target.value)}
            />
            <Form.Check 
            id='forRent' type="checkbox"
            label="Rentar" className='ms-3'
            value={forRent}
            onChange={(e)=> setForRent(e.target.value)}
            />
          </Form.Group>
          
          <Button variant="outline-dark mb-5" 
            className='w-50' 
            type="submit"
            onClick={handleNewHouse}
            >
            Listar propiedad
          </Button>
        </Form>
        </>
      )
    }
    </>
  )
}

export default FormSell
