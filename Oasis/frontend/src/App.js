import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import './assets/style/HomeScreen.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container fluid className="px-0">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App