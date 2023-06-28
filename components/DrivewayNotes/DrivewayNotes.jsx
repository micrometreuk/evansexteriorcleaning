import { Container, Row, Card, Button } from "react-bootstrap";

export function DrivewayTitle() {
    return (
        <Container className="md-container p-4">
            <div className="cntr-title">
                <h1 className="display-1 text-center">Driveway Cleaning</h1>
            </div>
        </Container>
    );
}

export function DrivePledge() {
    return (
        <div className="drivewaycontainer">
            <div className="drivemain">
                <div className="grid">
                    <div className="card">
                        <p>
                            Driveway cleaning can transform the look of your
                            driveway Our driveway pressure washing service
                            ensures a perfect finish every time.
                        </p>
                    </div>

                    <div className="card">
                        <p>
                            Our pledge is to arrive on time, perform an
                            efficient driveway cleaning service and clear away
                            all mess, all at an affordable price.
                        </p>
                    </div>

                    <div className="card">
                        <p>
                            We offer pressure washing, soft washing, kiln dried
                            sand finish and a driveway sealing option.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .drivewaycontainer {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/3.webp);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 98vh;
                    min-width: 42vh;
                }

                .drivemain {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}
export function DriveAbout() {
  return (
    <div className="drivewaycontainer">
      <div className="drivemain">
          <div className="card">
            <p>
            We tackle the muckiest of exteriors, the grubbiest of driveways, walkways and patios. 
            <br/>
              Whether you're a homeowner wanting to smarten up the outside of your property or a commercial customer needing a professional, experienced and qualified pressure washing service. 
            <br/>
              We are a friendly team, happy to answer all of your questions. 
            <br/>
              
              Our expertise enables us to offer the right service for you and your property
            </p>
        </div>
      </div>
      <style jsx>{`
                .drivewaycontainer {
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-image: linear-gradient(
                            rgba(0, 0, 0, 0.3),
                            rgba(0, 0, 0, 0.2)
                        ),
                        url(./images/2.webp);
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    align-items: center;
                    width: 100%;
                    min-height: 98vh;
                    min-width: 42vh;
                }

                .drivemain {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 3rem;
                }

                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }

                @media (max-width: 600px) {
                    .grid {
                        width: 100%;
                        flex-direction: column;
                    }
                }
            `}</style>
    </div>
  );
}


// styles
const pageStyles = {
  color: "#232129",
  padding: 6,
 flex:1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "1.25rem",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}


const docLink = {
  text: "We value our customers and are proud that a number of our clients come direct from the recommendations of others in the local area.",
  text2: "Cleaning your driveways, walkways and patios can add upwards of £10,000 in value to your property. If you are struggling to sell or rent your property a clean exterior can make a big difference.",
  text3: "All of our staff are DBS checked. So you can be sure that any staff working at your home are honest and trustworthy.",
  color: "#8954A8",
}

export function DriveMain() {
    return (
        <main style={pageStyles}>
            <ul style={listStyles}>
                <li style={docLinkStyle}>
                    <div
                        style={linkStyle}
                    >
                        {docLink.text}
                    </div>
                </li>

                <li style={docLinkStyle}>
                    <div
                        style={linkStyle}
                    >
                        {docLink.text2}
                    </div>
                </li>

                <li style={docLinkStyle}>
                    <div
                        style={linkStyle}
                    >
                        {docLink.text3}
                    </div>
                </li>

            </ul>
        </main>
    );
}



export function DrivewayNotes() {
    return (
        <div className="driveway">
            <DrivePledge />
            <DriveAbout />
            <DriveMain />
        </div>
    );
}

export default DrivewayNotes;