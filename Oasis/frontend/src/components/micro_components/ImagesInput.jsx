import '../../assets/style/ImagesInput.css'
import { useState, useRef} from 'react'
import { useUploadHouseImageMutation } from '../../slices/housesApiSlice';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import Load from './Load';

const ImagesInput = ({image,setImage}) => {

  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState([]);
  const [shownImage, setShownImage] = useState(image);
  const fileInputRef = useRef();
  const [uploadHouseImage, {isLoading, error}] = useUploadHouseImageMutation();

  const selectFiles = () => {
    fileInputRef.current.click();
  }
  
  const uploadImages = async (e) => {
    e.preventDefault();
    // formData is used to send files to the server
    const formData = new FormData();
    for( let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    try {
      const res = await uploadHouseImage(formData).unwrap();
      toast.success('Imagen subida exitosamente');
      // Update the state with the new images
      setShownImage(res.images);
      res.images.forEach((image) => {
        setImage((prev) => [...prev, image.path]);
      });
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  function deleteimage(index) {
    // Delete the image that is not equal to the index
    setImage((prev) => prev.filter((_,i) => i !== index));
  }

  function onDragOver(e) {
    e.preventDefault();
    setDrag(true);
    // Visual effect
    e.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDrop(e) {
    e.preventDefault();
    setDrag(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        // If no file is selected, the function will return
        if ( files[i].type.split('/')[0] !== 'image') continue;
        // Verify that the image is not already in the state
        if( !image.some((e)=> 
          e.name === files[i].name) ) {
          setImage(prev => [...prev, {
            name: files[i].name,
            // Set a temporary URL for the image
            url: URL.createObjectURL(files[i]),
          }]);
        }
      }
    }
  }

  function updateFiles(e){
    const actualFiles = e.target.files;
    if (actualFiles.length > 0) {
      for (let i = 0; i < actualFiles.length; i++) {
        // If no file is selected, the function will return
        if ( actualFiles[i].type.split('/')[0] !== 'image') continue;
        // Verify that the image is not already in the state
        if( !files.some((e)=> 
          e.name === actualFiles[i].name) ) {
          setFiles(prev => [...prev, actualFiles[i]]);
        }
      }
    }
  }


  return (
    <>

    {
      isLoading ? (
        <Load />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="add-img-container">
          <div className="top">
            <p>Arrastrar y soltar imagen</p>
          </div>
          <div className="drag-area"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}>
            {
              drag ?  (
                <span className="select">
                  Suelte su image aquí
                </span>
              ) : (
                <>
                  Arrastre su image aquí o {' '}
                  <span className="select" role='button' onClick={selectFiles}>
                    Seleccionar
                  </span>
                </>
              )
            }
            <input type="file" name='file' className="file" 
            multiple
            ref={fileInputRef}
            onChange={updateFiles}/>
          </div>
          <Container>
            {
              shownImage.map((image, index) => (
                <div key={index} className="image">
                  <img src={image.path} alt={image.name}/>
                  <span className="delete" onClick={()=> deleteimage(index)}>
                  </span>
                </div>
              ))
            }
          </Container>
          <button type='button' onClick={uploadImages}>
            Upload
          </button>

        </div>
      )
    }
    </>
  )
}

export default ImagesInput
