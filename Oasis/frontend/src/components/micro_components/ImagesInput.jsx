import '../../assets/style/ImagesInput.css'
import { useState, useRef} from 'react'
import { Container } from 'react-bootstrap';
import Load from './Load';
import CloseButton from 'react-bootstrap/CloseButton';

const ImagesInput = (
  {
    loadingImage,
    imageError,
    files,
    setFiles,
  }) => {

  const [drag, setDrag] = useState(false);
  const [shownImage, setShownImage] = useState([]);
  const fileInputRef = useRef();


  // Open the file dialog
  const selectFiles = () => {
    fileInputRef.current.click();
  }

  // Update the state with the selected files
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
    updateShownImage( actualFiles );
  }
  // Set an imaga with a temporary URL to show it
  const updateShownImage = ( actualFiles ) => {
    if (actualFiles.length > 0) {
      for (let i = 0; i < actualFiles.length; i++) {
        // If no file is selected, the function will return
        if ( actualFiles[i].type.split('/')[0] !== 'image') continue;
        // Verify that the image is not already in the state
        if( !files.some((e)=> 
          e.name === actualFiles[i].name) ) {
          setShownImage(prev => [...prev, {
            name: actualFiles[i].name,
            // Set a temporary URL for the image
            url: URL.createObjectURL(actualFiles[i]),
          }]);
        }
      }
    }
  }
  // Delete the file & the shown image
  function deleteimage(index) {
    // Delete the image that is not equal to the index
    setFiles((prev) => prev.filter((_,i) => i !== index));
    setShownImage((prev) => prev.filter((_,i) => i !== index));
  }
  // Drag and drop events
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
    updateShownImage(files);
  }
  // End drag and drop events

  return (
    <>

    {
      loadingImage ? (
        <Load />
      ) : imageError ? (
        <h1>{imageError}</h1>
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
                  <img src={image.url} alt={image.name}/>
                  <CloseButton onClick={()=> deleteimage(index)}/>
                </div>
              ))
            }
          </Container>
        </div>
      )
    }
    </>
  )
}

export default ImagesInput
