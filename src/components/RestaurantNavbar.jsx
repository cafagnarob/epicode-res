// creiamo un componente per la navbar di react bootstrap
// un componente react puo essere scritto sia come classe ma anche come funzione

// funzione componenti semplici <--- useremo le funzioni
// classe componenti complessi
//
// importo le cose che mi servono da react bootstrap
import { Navbar, Container, Nav } from "react-bootstrap"

const RestaurantNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epicode-res</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">Prenota un tavolo</Nav.Link>
            <Nav.Link href="#">Contatti</Nav.Link>
            <Nav.Link href="#">Amministrazione</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RestaurantNavbar
