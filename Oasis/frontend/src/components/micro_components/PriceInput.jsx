import Container from 'react-bootstrap/Container';

const PriceInput = () => {

  let priceGap = 10000000;

  const handleRange = () => {
    const rangeInput = document.querySelectorAll('.range-input input'),
    priceInput = document.querySelectorAll('.min-max input'),
    progress = document.querySelector('.slider-price .price-slider');

    priceInput.forEach(input => {
      input.addEventListener('input', e => {
        // get the value of the input
        let minVal = parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);

        if ((maxVal - minVal >= priceGap) && (maxVal <= 90000000)) {
          if (e.target.className === 'input-min') {
            rangeInput[0].value = minVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
          } else {
            rangeInput[1].value = maxVal;
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
          }
        }

  
      });
    });

    rangeInput.forEach(input => {
      input.addEventListener('input', e => {
        // get the value of the input
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === 'range-min') {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
          progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }

  
      });
    });
  }


  return (
    <>
      <Container fluid className='price-cnt w-100'>
        <div className='min-max'>
          <div className='field'>
            <span>Min</span>
            <input type="number" id="min" className='input-min' 
            min='0' max='90000000' defaultValue='18000000'/>
          </div>
          <div className='mx-2'>-</div>
          <div className='field'>
            <span>Max</span>
            <input type="number" id="max" className='input-max' 
            min='0' max='90000000'defaultValue='72000000'/>
          </div>
        </div>
        <div className="slider-price mt-4">
          <div className="price-slider"></div>
        </div>
        <div className="range-input">
          <input type="range" id="min-range" className="range-min" 
          min='0' max='90000000' defaultValue='18000000' step='1000000'
          onChange={handleRange}/>
          <input type="range" id="max-range" className="range-max"
          min='0' max='90000000' defaultValue='72000000' step='1000000'
          onChange={handleRange}/>
        </div>
      </Container>
    </>
  )
}

export default PriceInput