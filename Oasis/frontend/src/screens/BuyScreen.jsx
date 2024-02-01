import FiltersNav from "../components/FiltersNav"
import ProductsList from "../components/ProductsList"
import Footer from "../components/Footer"
import '../assets/style/BuyScreen.css'

const BuyScreen = () => {
  return (
    <>    
      <FiltersNav />
      <p className='fs-5 ms-4 mt-4'>Resultados encontrados: ...</p>
      {/* TODO: Fetch data from DB */}
      <ProductsList />
      <ProductsList />
      <Footer />
    </>
  )
}

export default BuyScreen