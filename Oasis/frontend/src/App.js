import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import './assets/style/HomeScreen.css'

const App = () => {
  return (
    <>
      <main>
        <Container fluid className="px-0">
          <Outlet />
        </Container>
      </main>
    </>
  )
}

export default App