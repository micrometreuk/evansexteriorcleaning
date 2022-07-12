import { data } from "../../data/paths-data";
import { Offcanvas, Navbar, Container, Nav, NavDropdown, } from "react-bootstrap";
const pathsIconStyles = { fontSize: "1.0em", color: "white" };
const offcanvasToggle = {
    color: "#fff",
    backgroundColor: "#fff",
    border: "4px solid #fff",
    borderRadius: 11,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
    padding: "4px 6px",
    marginLeft: 10,
    lineHeight: 1,
}
const offcanvasContainer = {
    padding: 0,
    height: "100%"
};
const OffcanvasNav = {
    padding: 0,
    backgroundColor: " #1aaac7",
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
    backgroundColor: "#fff",
    border: "0.2rem solid teal",
    boxShadow: "0 0 10px",

};
const offcanvasBody = { padding: 0, height: "100%" };
const OffcanvasLinks = {
    color: "#fff",
    textDecoration: "none",
    padding: 8,
    margin: 8,
};

export function NavbarLinks() {
    return (
        <div className="navdiv">
            <Navbar expand="lg">
                <Container style={offcanvasContainer} >
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`}
                        style={offcanvasToggle}
                    />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand`} aria-labelledby={`offcanvasNavbarLabel`} placement="start"
                        style={OffcanvasNav}
                    >
                        <Offcanvas.Header closeButton style={offcanvasHeader} >
                            <Offcanvas.Title id={`offcanvasNavbarLabel`} style={offcanvasTitle}>
                            </Offcanvas.Title >
                        </Offcanvas.Header>
                        <Offcanvas.Body style={offcanvasBody} >
                            {data.map((e, i) => {
                                return (
                                    <Nav className="navbar-nav w-100 nav-justified flex-grow-1 pe-3" key={i}>
                                        {e.contact.map((e, i) => {
                                            return (
                                                <Nav.Link key={e}
                                                    style={pathsIconStyles}
                                                    className="pathsLinks"
                                                    href={e.href}
                                                    key={i}
                                                    title={e.title}
                                                >
                                                    {e.name}
                                                </Nav.Link>
                                            );
                                        })}
                                    </Nav>
                                );
                            })}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <style jsx>{`
        .navdiv {
          background-color: #1aaac7;
          margin-top: 9.1.8rem;
        }
        @media (max-width: 990px) {
          .navdiv {
            text-decoration: none;
          }
        }
      `}</style>
        </div>
    );
}

export default NavbarLinks;