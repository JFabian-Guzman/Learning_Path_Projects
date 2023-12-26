import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

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
    </>
  ) 
}

export default App