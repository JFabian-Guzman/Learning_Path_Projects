import '../assets/style/Hero.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const HomeScreen = () => {
  return (
    <>
      <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="House" className='bg-img'/>
      <Header />
      <div className='hero-txt'>
        <h2>PROVINCIA, CANTON</h2>
        <button>Explorar
        <FontAwesomeIcon icon={faUpRightFromSquare} />
        </button>
      </div>
    </>
  )
}

export default HomeScreen