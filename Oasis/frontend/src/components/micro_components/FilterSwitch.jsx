import { Container } from 'react-bootstrap'
import { useState } from 'react'


const FilterSwitch = () => {

  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }

  return (
    <>
    <Container fluid className='d-flex justify-content-around align-items-center'>
      <button onClick={decrease} className='switch-btn px-2'>
        -
      </button>
      <span>{value}</span>
      <button onClick={increase} className='switch-btn px-2'>
        +
      </button>
    </Container>
    </>
  )
}

export default FilterSwitch
