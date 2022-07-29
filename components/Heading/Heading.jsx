import { Container, Offcanvas, Navbar, Nav, NavDropdown, } from "react-bootstrap";
import { FaPhone, FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
const offcanvasToggle = {
  color: "#fff",
  backgroundColor: "cyan",
  border: "1px solid #088413",
  fontSize: 21,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
}
  const offcanvasContainer= { 
    padding: 0, 
    fontSize: "1.59rem",
    height: "100%" 
  };
  const OffcanvasNav = {
    padding: 0,
    backgroundColor: "cyan",
    width: "50%",
    height: "100%",
  };
  const offcanvasHeader = {
    padding: 3,
    backgroundColor: "#fff",
    width: "100%",
    height: "2%",
    borderRadius: "5px",
    margin: 2,
  };
  const offcanvasTitle = {
    padding: 0,
    height: "10%",
    backgroundColor: "white",
    border: "0.2rem solid teal",
    boxShadow:"0 0 10px",

  };
  const offcanvasBody = { padding: 0, height: "100%" };
  const OffcanvasLinks = {
    color: "#fff",
    fontSize: "1.18rem",
    textDecoration: "none",
    padding: 8,
    margin: 8,
  };

export function OffcanvasExample() {
  return (
    <>
        <Navbar expand="lg"
          style={{
            marginTop: "2.9rem",
            position: "fixed",
            top:0,
            right:0,
            left:0,
            zIndex:1030,
            borderRadius: "3px",
            border: "1px solid black",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 400,
            fontWeight: "bolder",
            lineHeight: "1em",
          }}
        >
          <Navbar.Text
          >
            <a
              href="tel:07445549727<"
              title="Call evans exterior cleaning"
              style={{ color: '#000' }} >
              <FaPhone size={38} />
              07445549727
            </a>
          </Navbar.Text>
          <Navbar.Text>
              <a 
              href="mailto:info@evansexteriorcleaning.co.uk"
              title="Email evans exterior cleaning"
              style={{ color: '#000' }}
              >
                <FaEnvelope size={38} />
                info@evansexteriorcleaning.co.uk
              </a>
          </Navbar.Text>
          <Navbar.Text
          >
            <a href="whatsapp://send?abid=+447445549727&text=Hello%2C%20World!" aria-label="Whatsapp" style={{color: '#000', padding: "0.5em 1em", }} >
              <FaWhatsapp size={38} ></FaWhatsapp>
            </a>
            <a href="/" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ color: '#000', padding: "0.5em 1em", }} >
              <FaFacebook size={38}></FaFacebook>
            </a>
            <a href="/" target="_blank" rel="noreferrer" aria-label="Instagram"style={{ color: '#000', padding: "0.5em 1em", }} >
              <FaInstagram size={38}></FaInstagram>
            </a>
            <a href="/" target="_blank" rel="noreferrer" aria-label="Youtube"style={{ color: '#000', padding: "0.5em 1em", }} >
              <FaYoutube size={38} ></FaYoutube>
            </a>
          </Navbar.Text>
        </Navbar>
        <>
        </>
          <Navbar 
                    style={{
                      position: "sticky",
                      marginTop: "0.6rem",

                      top:0,
                      right:0,
                      left:0,
                      zIndex:1050,
                      borderRadius: "3px",
                      border: "1px solid black",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 400,
                      fontWeight: "bolder",
                      lineHeight: "1em",
                    }}
          expand="lg" bg="light" variant="light" className="mb-0">
            <Navbar.Toggle  aria-labelledby="offcanvasNavbar" aria-controls={`offcanvasNavbar-expand`} 
            
              style={offcanvasToggle}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="start"
              style={OffcanvasNav}

            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-around flex-grow-1 pe-3 "
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/drive">Driveway Cleaning</Nav.Link>
                  <Nav.Link href="/whyus">Why choose us</Nav.Link>
                  <Nav.Link href="/services">Services we offer</Nav.Link>
                  <Nav.Link href="/areas">Areas we cover</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
      <style>

      </style>
    </>
  );
}

export default OffcanvasExample;