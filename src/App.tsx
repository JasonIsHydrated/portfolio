import { Container } from "react-bootstrap";
import LandingPage from "./Components/LandingPage/LandingPage";
import NavBar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footers/Footer";

function App() {
  return (
    <div className="background">
      <Container fluid style={{ minHeight: "6vh" }}>
        <NavBar fixed-top />
      </Container>
      <Container fluid style={{ minHeight: "84vh" }}>
        <LandingPage />
      </Container>
      <Container fluid style={{ minHeight: "10vh" }}>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
