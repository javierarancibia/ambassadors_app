import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFillCameraFill } from "react-icons/bs";
import logo from "./StepsComponents/images/camera.png";
const NavBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="60" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/" className="text-decoration-none">
              home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/readme" className="text-decoration-none">
              readme
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
