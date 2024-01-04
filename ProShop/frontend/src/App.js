import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      {/*Imported header*/}
      <Header />
        <main className ="py-3"/*Padding on the y-axis*/>
          <Container>
            <Outlet />
          </Container>
        </main>
        {/*Imported footer*/}
        <Footer />
        <ToastContainer />
    </>
  ) 
}

export default App